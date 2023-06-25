// export interface Attendance {
//   markAttendance(): void;
//   createdAt(): Date;
//   updatedAt(): Date;
// }

// class TeacherAttendance implements Attendance {

//     markAttendance() {
//         console.log("Teacher Attendance");
//     }
    
//     createdAt() {
//         return new Date();
//     }
    
//     updatedAt() {
//         return new Date();
//     }

// }





// // interface Attendance {
// //     markAttendance(): void;
// //     isTeacher(): boolean;
// //     isStudent(): boolean;
// //     createdAt(): Date;
// //     updatedAt(): Date;
// // }


// interface PSF {
//     print(): void;
//     scan(): void;
//     fax(): void;
// }

interface ScanBehaviour {
    scan(): void;
}

interface FaxBehaviour {
    fax(): void;
}

interface PrintBehaviour {
    print(): void;
}
  