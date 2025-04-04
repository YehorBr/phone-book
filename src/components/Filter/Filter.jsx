export const Filter = ({filterValue, filterChange})=>{
    return <label>
        Find contacts by name:
        <input onChange={filterChange} type="text" value={filterValue}/>
    </label>
}