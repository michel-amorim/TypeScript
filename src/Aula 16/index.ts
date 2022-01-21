// Structural type system do TS

type VerifyYserfn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyYserfn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'Michel', password: '123456' };
const sentUser = { username: 'Michel', password: '123456' };
const loggeIn = verifyUser(bdUser, sentUser);
console.log(loggeIn);
