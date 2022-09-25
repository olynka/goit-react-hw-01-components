import { Avatar,Desc,Name,Tag,Location,Label,Stats,InfoStat,Quantity} from "./Profile.styled"
import PropTypes from "prop-types"


export const UserData = ({ username, tag, location, avatar, stats }) => {
    // const{username,tag,location,avatar,stats}=user
    return <Desc>

     <Avatar src={avatar} alt={username} />
        <Name>Name: {username}</Name>
        <Tag>Tag:@ {tag}</Tag>
        <Location>Location: {location}</Location>


  <Stats>
    <InfoStat>
      <Label>Followers</Label>
                <Quantity>{stats.followers}</Quantity>
    </InfoStat>
    <InfoStat>
      <Label>Views</Label>
                <Quantity>{stats.views }</Quantity>
    </InfoStat>
    <InfoStat>
      <Label>Likes</Label>
                <Quantity>{stats.likes}</Quantity>
    </InfoStat>
  </Stats>
</Desc>
}


 UserData.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
}

