export {escapeKeyListener};

const escapeKeyListener = (cb: Function) => () => {
  
  const onPressKeyFunction = (e: any) => {
    if(e.key === 'Escape') {
      cb();
    }
  };
  
  document.addEventListener('keydown', onPressKeyFunction);
  
  return () => {
    
    document.removeEventListener("keydown", onPressKeyFunction);
  }
  
}

