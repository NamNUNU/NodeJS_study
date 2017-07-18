# NODEJS에 대한 스터디

## node에 대한 예제 및 프로젝트 샘플 파일입니다.



#### 쿠키

- 쿠키는 stateless인 http에서 상태를 저장하기 위한 수단이며 쿠키를 기반으로 세션이 등장한다. 또, 이 세션을 기반으로 인증이라는 것이 나온다. 인증은 회원가입이나 승인등을 말하며, 인증이 없으면 사용자에 최적화된 작업을 할수 없으며 보안성이 떨어지게 된다.

- 같은 사이트지만 다른 브라우저를 사용한다면, 사용자마다 다른 상태를 유지할수 있다. 

- 쿠키는 개발자 도구의 네트워크 탭에서 확인이 가능하다. response header에 set-cookie안에 쿠키 정보가 담겨있다. set-cookie는 약속되어있는 표준이다. 이렇게 response된 정보는 브라우저가 저장해둔다. 이 후에 웹 브라우저에서 접근할 때마다 request header에 cookie 값이 실리게 된다. 이 cookie 값은 웹 서버로 전달 되며, 웹 서버에서는 다시 set cookie로 cookie 값을 변경할 수 있다.

- node에서는 cookie-parser라는 미들웨어를 사용한다. 암호화를 위하여 cookie-parser에 임의의 키값을 넣어주고, 암호화된 쿠키를 받아올때는 req.signedCookie, 쿠키를 만들때는 3번째 인자에 {signed:true를 넣어준다.}

- 아이디나 비밀 번호와 같은 중요한 값은 절대로 쿠키에 저장하지 않는다. 대신 세션을 사용하도록한다.


#### 세션

- 세션이란 쿠키를 좀 더 안정화 시킨 버전이라고 생각하면 된다. 따라서 쿠키와 세션은 뗄레야 뗄 수 없는 관계이며, 보안을 위하여 반드시 사용해야하는 기능중 하나이다.

- 쿠키의 경우 서버가 클라이언트에게 쿠키를 저장하라고 요청한다. 즉, 사용자의 컴퓨터에 쿠키를 저장하는 것이다. 이런 방식으로 저장을 하게 된다면 보안상의 이슈가 발생한다. 서버와 클라이언트가 통신하는 과정에서, 중요한 정보가 왔다갔다하므로 위험하고, 사용자의 컴퓨터에 접근하여 쿠키를 탈취할 수 도있다.

- 이와 같은 문제를 개선하기 위해서 서버 사이드에서 데이터를 처리하는 세션이 등장하게 되었다. 세션은 사용자가 서버에 접속할때, 서버는 클라이언트에 쿠키 방식으로 데이터를 저장하게 된다. 이때 저장하는 데이터는 사용자의 식별자인 id 값만 저장(save only id)하게 된다. 그 값에 해당 되는 여러가지 정보들은 서버쪽의 메모리 등에 '실제적인 데이터'로 저장된다.

- 즉 세션은, 식별자만 클라이언트에 저장하고, 식별자에 해당하는 실제 데이터는 데이터베이스나 파일, 메모리등에서 읽어온 후 사용하는 것이다.

- 세션은 브라우저나 애플리케이션이 종료되면 사라진다.

- express-session의 공식 git 레파지토리 : https://github.com/expressjs/session