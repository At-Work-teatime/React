export const isEmail = (email) => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  
    return emailRegex.test(email);
  };
  
 export function getTargetUrl(url) {
    const to = url.split('/');
    if (to.length === 2) {
      return `${url}/1`;
    }
    if(Number(to[2])>=6){
        return `/main`
    }
    return `/${to[1]}/${Number(to[2]) + 1}`;
  }
  