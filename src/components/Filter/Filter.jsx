import { Label, Input } from "./Filter.styled"

export const Filter = ({filterValue, filterChange})=>{
    return <Label>
        Find contacts by name:
        <Input onChange={filterChange} type="text" value={filterValue}/>
    </Label>
}