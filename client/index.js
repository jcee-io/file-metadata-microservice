const handler = async () => {
  let myFile = document.getElementById('myFile');
  console.log(myFile);
  let info = await axios.post('/', myFile.value);
};