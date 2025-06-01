export const useInvestorRelationsStore = defineStore('investorRelations', {
  state: () => ({
    data: {
      // 1: { ... },
      // 2: { ... },
      // 3: { ... }
    },
    currentCategory: 1,
    loading: false,
    error: null,
    lastUpdated: {
      // 1: timestamp,
      // 2: timestamp
    },
    cacheExpiry: 5 * 60 * 1000,
  }),
  getters: {
    currentData: (state) => {
      return state.data[state.currentCategory] || {};
    },
    hasCachedData: (state) => (cat) => {
      return !!state.data[cat];
    },
    isCacheExpired: (state) => (cat) => {
      const lastUpdate = state.lastUpdated[cat];
      if (!lastUpdate) return true;

      return Date.now() - lastUpdate > state.cacheExpiry;
    },
    cachedCategories: (state) => {
      return Object.keys(state.data).map(Number);
    },
    getDataByCategory: (state) => (cat) => {
      return state.data[cat] || {};
    },
  },

  actions: {
    transformData(originalData) {
      const transformedData = {};

      Object.keys(originalData).forEach((date) => {
        transformedData[date] = {
          date: date,
          information: originalData[date].map((info) => ({
            subject: info.InfoSubject,
            filePath: info.InfoFile,
          })),
        };
      });

      return transformedData;
    },
    async fetchIRData(cat = 1, forceRefresh = false) {
      if (
        !forceRefresh &&
        this.hasCachedData(cat) &&
        !this.isCacheExpired(cat)
      ) {
        // console.log(`使用緩存資料 - 分類 ${cat}`);
        this.currentCategory = cat;
        this.error = null;
        return this.data[cat];
      }

      this.loading = true;
      this.error = null;
      this.currentCategory = cat;

      try {
        const response = await fetch(`/api/Home/GetIRData?cat=${cat}`, {
          method: 'POST',
          credentials: 'include',
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const originalData = await response.json();
        const transformedData = this.transformData(originalData);

        this.data[cat] = transformedData;
        this.lastUpdated[cat] = Date.now();
        return transformedData;
      } catch (err) {
        this.error = err instanceof Error ? err.message : '獲取資料失敗';
        console.error('獲取投資者訊息資料失敗：', err);
        throw err;
      } finally {
        this.loading = false;
      }
    },
    async switchCategory(cat) {
      return await this.fetchIRData(cat, false);
    },
    async refreshCategory(cat) {
      return await this.fetchIRData(cat, true);
    },
    clearCache(cat) {
      if (cat) {
        delete this.data[cat];
        delete this.lastUpdated[cat];
      } else {
        // 清除所有緩存
        this.data = {};
        this.lastUpdated = {};
      }
    },
    clearExpiredCache() {
      Object.keys(this.data).forEach((cat) => {
        if (this.isCacheExpired(Number(cat))) {
          this.clearCache(Number(cat));
        }
      });
    },
  },
});
