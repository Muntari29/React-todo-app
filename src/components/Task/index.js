import styled from '@emotion/styled'
import Toggle from '../Toggle'

const ListItem = styled.li`
    display: flex;
    width: 400px;
    height: 40px;
    align-items: center;
    padding: 0 8px;
    box-sizing: border-box;
    list-style: none;
    box-shadow: 0 0 4px rgba(0,0,0,0.2);
    border-radius: 16px;
`

const Content = styled.span`
    flex: 1;
    margin-left: 8px;
    font-size: 14px;
`
const RemoveButton = styled.button`
    width: 60px;
    height: 24px;
    margin-left: 8px;
    color: white;
    border-radius: 8px;
    background-color: red;
    border: none;
    cursor: pointer;
`


const Task = ({ content, complete, ...props}) => {
    return (
    <ListItem {...props}>
        <Toggle on={complete}/>
        <Content>{content}</Content>
        <RemoveButton>Remove</RemoveButton>
    </ListItem>
    )
}

export default Task