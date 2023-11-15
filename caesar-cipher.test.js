import caesarCipher from "./caesar-cipher";

test(`"z" shifted by 16 returns "p"`, () => {
  expect(caesarCipher("z", 16)).toMatch("p");
});

test(`"zABd" shifted by 3 returns "cDEg"`, () => {
  expect(caesarCipher("zABd", 3)).toMatch("cDEg");
});

test(`"attack at dawn" shifted by 1 returns "buubdl bu ebxo"`, () => {
  expect(caesarCipher("attack at dawn", 1)).toMatch("buubdl bu ebxo");
});

test(`"attack at dawn!??" shifted by 25 "zsszbj zs czvm!??"`, () => {
  expect(caesarCipher("attack at dawn!??", 25)).toMatch("zsszbj zs czvm!??");
});

test(`"Where are you!??" shifted by 9 "Fqnan jan hxd!??"`, () => {
  expect(caesarCipher("Where are you!??", 9)).toMatch("Fqnan jan hxd!??");
});
