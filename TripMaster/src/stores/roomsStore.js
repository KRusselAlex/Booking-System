
import { allcontent, CourseContentOne, removeContent } from "@/api/roomApi.js";
import { defineStore } from "pinia";
import { useRouter } from 'vue-router';


export const useRoomsStore = defineStore('rooms', {
    state: () => ({
        rooms: [],
        roomsone:[],
        loading: false


    }),
    persist: true,
    actions: {

        async getallcoursesContent() {
            await allcontent().then((data) => ( this.rooms = data

            ))

        },
        async getallcoursesContentOne(courseId) {
            await CourseContentOne(courseId).then((data) => ( this.roomsone = data

            ))

        },
        getroomone(courseId){

            const courseOne  =  this.rooms.filter(content => content.courseId == courseId);
            console.log(courseOne)
            return courseOne


        },
        hideCourseContent(id) {

             this.rooms =  this.rooms.filter(content => content.id != id);


        },
        async removeCoursesContent(id) {
            await removeContent(id).then(async () => await this.getallcoursesContent())
        },
        getOneCourse(id) {
            const router = useRouter()
            const course =  this.rooms.filter((user) => user.id == id);

            if (course.length < 1) {
                router.push('/notfound')
                return
            }


            return course[0]
        },
        async createcoursescontent(courseId, title, content, video, image) {
            console("store",courseId, title, content, video, image )
            const data = await createcourse(courseId, title, content, video, image)
            if (data) {
                await this.getallcoursesContent()

            }
            return data


        },

    }
})
