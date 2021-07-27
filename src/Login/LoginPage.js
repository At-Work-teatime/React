import React from 'react';

function Login({history}) {
  return (
    <div>
      <section className="text__title">
      직장생활을 위한 네트워킹 플랫폼, at-work!
      </section>
      <form className="button-form-full">
          <button  className="button-full" onClick={() => history.push('./SignUp')}>
          계정 만들기
          </button>
          <button className="button-full" onClick={() => history.push('./SignIn')}>
          이미 계정이 있어요!
          </button>
      </form>
    </div>
  );
}

export default Login;
