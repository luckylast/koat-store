import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    id: 1,
    title: "A/X Armani Exchange AX1326 Active Watch",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    image: "https://koat.sg/wp-content/uploads/2016/12/ax1326.jpeg",
    price: 159,
    desc: "Hardside/Hard Plastic/Silicone<br>5.91 high<br>5.91 wide<br>All-black watch featuring round dial with 60-second outer dial, date window, and ribbed texture at minute track and subdials<br>44 mm resin case with mineral dial window<br>Quartz movement with analog display<br>Silicone band with buckle closure<br>      Water resistant to 50 m (165 ft): In general, suitable for short periods of recreational swimming, but not diving or snorkeling",
    category: "Amani Exchange Men"
  },
  {
    id: 2,
    title: "A/X Armani Exchange AX1326 Active Watch",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    image: "https://koat.sg/wp-content/uploads/2016/12/ax1326.jpeg",
    price: 159,
    desc: "Hardside/Hard Plastic/Silicone<br>5.91 high<br>5.91 wide<br>All-black watch featuring round dial with 60-second outer dial, date window, and ribbed texture at minute track and subdials<br>44 mm resin case with mineral dial window<br>Quartz movement with analog display<br>Silicone band with buckle closure<br>      Water resistant to 50 m (165 ft): In general, suitable for short periods of recreational swimming, but not diving or snorkeling",
    category: "Amani Exchange Men"
  },
  {
    id: 3,
    title: "A/X Armani Exchange AX1326 Active Watch",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    image: "https://koat.sg/wp-content/uploads/2016/12/ax1326.jpeg",
    price: 159,
    desc: "Hardside/Hard Plastic/Silicone<br>5.91 high<br>5.91 wide<br>All-black watch featuring round dial with 60-second outer dial, date window, and ribbed texture at minute track and subdials<br>44 mm resin case with mineral dial window<br>Quartz movement with analog display<br>Silicone band with buckle closure<br>      Water resistant to 50 m (165 ft): In general, suitable for short periods of recreational swimming, but not diving or snorkeling",
    category: "Amani Exchange Men"
  },
  {
    id: 4,
    title: "A/X Armani Exchange AX1326 Active Watch",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    image: "https://koat.sg/wp-content/uploads/2016/12/ax1326.jpeg",
    price: 159,
    desc: "Hardside/Hard Plastic/Silicone<br>5.91 high<br>5.91 wide<br>All-black watch featuring round dial with 60-second outer dial, date window, and ribbed texture at minute track and subdials<br>44 mm resin case with mineral dial window<br>Quartz movement with analog display<br>Silicone band with buckle closure<br>      Water resistant to 50 m (165 ft): In general, suitable for short periods of recreational swimming, but not diving or snorkeling",
    category: "Amani Exchange Men"
  },
  {
    id: 5,
    title: "A/X Armani Exchange AX1326 Active Watch",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    image: "https://koat.sg/wp-content/uploads/2016/12/ax1326.jpeg",
    price: 159,
    desc: "Hardside/Hard Plastic/Silicone<br>5.91 high<br>5.91 wide<br>All-black watch featuring round dial with 60-second outer dial, date window, and ribbed texture at minute track and subdials<br>44 mm resin case with mineral dial window<br>Quartz movement with analog display<br>Silicone band with buckle closure<br>      Water resistant to 50 m (165 ft): In general, suitable for short periods of recreational swimming, but not diving or snorkeling",
    category: "Amani Exchange Men"
  },
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class CourseApi {
  static getAllCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }

  static saveCourse(course) {
    course = Object.assign({}, course); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (course.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id == course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          course.id = generateId(course);
          course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
          courses.push(course);
        }

        resolve(course);
      }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(course => {
          course.courseId == courseId;
        });
        courses.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CourseApi;
