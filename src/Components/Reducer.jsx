import NewStudents  from './NewStudents';
import EditStudent from './EditStudent';
import Student from './Student';




const Reducer = (state="",action) =>{
    switch(action){
     case NewStudents : return <NewStudents/>
     case EditStudent : return <EditStudent/>
     default : return <Student/>
    }
}

export default Reducer;