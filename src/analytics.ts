import * as $ from "jquery";

function createAnalytics(): object {
  let counter = 0;
  let isDestoyed: boolean = false;

  const listener = (): number => counter++;

  $(document).on("click", listener);

  return {
    destroy() {
      $(document).off("click", listener);
      isDestoyed = true;
    },

    getClicks() {
      if (isDestoyed) {
        return "Analytics is destroyed now";
      }
      return counter;
    },
  };
}

window["analytics"] = createAnalytics();
