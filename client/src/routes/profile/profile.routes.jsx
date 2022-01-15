import TeacherProfile from "../../components/teacher-profile/teacherProfile.components"
const Profile = ({teacher}) => {
    return(
        <div className="profile">
            <TeacherProfile Name={teacher.Name} source={teacher.source}/>
        </div>
    )
}
export default Profile