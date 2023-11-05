import styled from "styled-components";
//import { clearAllUsers} from '../Store/slice/UserSlice'
import {useDispatch} from "react-redux"
import { clearAllUsers } from "../Store/actions";
export const DeleteAllUser = () => {
  const dispatch = useDispatch ();
  const deleteUsers = () => {
    dispatch (clearAllUsers())
  }
  return <Wrapper>
   <button className="clear-btn" onClick={clearAllUsers}>DeleteAllUser</button>
   </Wrapper>
};
const Wrapper = styled.section `
.clear-btn{
  text-transform: capitalize;
  background-color : orange;
  margin-top : 2rem
}
`
export default DeleteAllUser;