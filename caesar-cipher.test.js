import caesarCipher from "./caesar-cipher";

test(`"attack at dawn" shifted by 1 returns "buubdl bu ebxo"`, () => {
  expect(caesarCipher("attack at dawn", 1)).toMatch("buubdl bu ebxo");
});
