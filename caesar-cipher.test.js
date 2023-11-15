import caesarCipher from "./caesar-cipher";

test(`"attack at dawn" shifted by 1 returns "buubdl bu ebxo"`, () => {
  expect(caesarCipher("attack at dawn", 1)).toMatch("buubdl bu ebxo");
});

test(`"attack at dawn!??" shifted by 25 "zsszbj zs czvm!??"`, () => {
  expect(caesarCipher("attack at dawn!??", 25)).toMatch("zsszbj zs czvm!??");
});
