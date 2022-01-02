const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=81973e7e&s=frozen
The quick brwon fox jumps over the lazy dog.
abbcccdddd
`;

console.log(str.match(/(?<=@).{1,}/g));
