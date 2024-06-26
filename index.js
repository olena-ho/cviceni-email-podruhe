const goodbye = (name) => {
  return 'S pozdravem, ' + name;
};

const formalGoodbye = (name) => {
  return `S uctivou poklonou, <br> ${name}`;
};
const rudeGoodbye = (name) => {
  return 'Měj se, ' + name;
};

const fillSubject = (subject) => {
  document.querySelector('.email__subject').textContent = subject;
};

const fillBody = (body, name, goodbyeFunction) => {
  const bodyElm = document.querySelector('.email__body');
  bodyElm.innerHTML = body;
  const closingElm = document.querySelector('.email__closing');
  closingElm.innerHTML = goodbyeFunction(name);
};

fillSubject('Obchodní sdělení');
fillBody(
  'Kupte mycí prostředek, který vám vytře zrak, se slevou 50 %.',
  'Jan Čistý',
  formalGoodbye
);

