import { AvatarFriends,ItemFriends,StatusFriends,SectionFriend,NameFriend,ListFriend} from "./FriendList.styled"
import PropTypes from "prop-types"

export const FriendList = ({ friends }) => {
    return (
        <SectionFriend>
            <ListFriend>
    {friends.map(({avatar,name,isOnline,id}) => (
    <ItemFriends key={id}>
    <StatusFriends status={isOnline}/>
    <AvatarFriends  src={avatar} alt="User avatar" width="48" />
    <NameFriend>{ name}</NameFriend>
    </ItemFriends>
    ))}
                </ListFriend>
        </SectionFriend>
    )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};