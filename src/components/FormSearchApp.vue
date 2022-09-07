<template>
  <form v-show="isOpen" class="search-form form" @click.stop @submit.prevent>
    <InputBase
      v-model.capitalize="cityName"
      class="search-form__search-field"
      placeholder="Enter city..."
      type="text"
      @blur="closeForm"
    >
    </InputBase>
    <ButtonBase
      :disabled="isCityNameEmpty"
      class="search-form__search"
      type="submit"
      @click="getCityWeather(cityName)"
      ><img
        alt="Search"
        class="main__search"
        height="26"
        src="@/assets/img/icons/search.svg"
        width="25"
    /></ButtonBase>
  </form>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { SERVER_CODE } from "@/constants/api";
import { getItem } from "@/helpers/localStorage";
import { initValues, LOCAL_STORAGE } from "@/constants/values";
import { DEFAULT_ERROR_TOAST_CONFIG } from "@/constants/toast";

export default defineComponent({
  name: "FormSearchApp",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["closeForm"],
  data() {
    return {
      cityName: "",
    };
  },
  created() {
    this.isCityInLocalStorage();
  },
  computed: {
    isCityNameEmpty() {
      const oneSymbol = 1;
      return this.cityName.length <= oneSymbol;
    },
  },
  methods: {
    ...mapActions(["getCityWeather"]),
    closeForm() {
      this.$emit("closeForm", true);
    },
    async getCityWeather(city) {
      try {
        const response = await this.$store.dispatch("getCityWeather", city);

        if (response.cod === SERVER_CODE.CODE_200) {
          this.cityName = "";
          this.closeForm();
        } else {
          throw new Error(response.message);
        }
      } catch (error) {
        this.$toast.show(error, DEFAULT_ERROR_TOAST_CONFIG);
      }
    },
    isCityInLocalStorage() {
      const currentCity = getItem(LOCAL_STORAGE.CURRENT_CITY);
      const isCurrentCityEmpty = Object.keys(currentCity).length === 0;

      if (isCurrentCityEmpty) {
        this.getCityWeather(initValues.SAINT_PETERSBURG);
      } else {
        this.getCityWeather(currentCity);
      }
    },
  },
});
</script>
