import React from 'react'

function Form( {memberList, setMemberList} ) {
  return (
    <form
    onSubmit={(e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const favDay = e.target.favDay.value;
      const favFood = e.target.favFood.value;
      setMemberList([...memberList, { name, favDay, favFood }]);
      e.target.reset();
    }}
  >
    <input type="text" name="name" placeholder="Name" /><br />
    <select name="favDay" id="favDay" defaultValue="Pazartesi"><br />
      <option value="Pazartesi">Pazartesi</option>
      <option value="Salı">Salı</option>
      <option value="Çarşamba">Çarşamba</option>
      <option value="Perşembe">Perşembe</option>
      <option value="Cuma">Cuma</option>
      <option value="Cumartesi">Cumartesi</option>
      <option value="Pazar">Pazar</option>
    </select><br />
    <input type="text" name="favFood" placeholder="Fav Food" /><br />
    <button type="submit">Submit</button>
  </form>)
}

export default Form