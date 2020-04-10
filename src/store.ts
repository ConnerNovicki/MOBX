export const createStore = () => {
  const store = {
    cities: [
      'Amsterdam',
      'London',
      'Madrid',
      'Hello',
    ],
    removeCity() {
      this.cities.pop();
    },
    get allCities() {
      return this.cities;
    },
    addCity(name: string) {
      this.cities.push(name);
    }
  };

  return store;
};

export type TStore = ReturnType<typeof createStore>
