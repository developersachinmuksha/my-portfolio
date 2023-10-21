import "../../App.css";

const Profile = ()=>{
    return (
        <div className="profile">
          <div className="profile-content">
            <p className="profile-content-text">
              Hey👋,
              <br />
              My name is
              <br />
              <span className="profile-content-tex-condidate-name">
                Sachin Muksha
              </span>
              <br />I build things for web
            </p>
          </div>
          <div className="profile-image">
            <img className="profile-image-pic" src="me.jpg" />
          </div>
        </div>
    )
}

export default Profile;