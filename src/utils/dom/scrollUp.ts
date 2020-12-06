export {scrollUp};

const scrollUp = () => {
  if(window.scrollY > 420) {
    window.scrollTo(0, 0);
  }
}