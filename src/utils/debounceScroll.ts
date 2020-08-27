
export default function debounce(func: Function, wait: number = 12, immediate: boolean = true) {
    let timeout: any;
    return function () {
      //@ts-ignore
      let context = this, args = arguments;
      let later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    }
}


