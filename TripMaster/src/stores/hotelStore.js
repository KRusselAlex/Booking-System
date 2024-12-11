import { allcourses, createcourse, removecourse, updatecourse, getstudentcourse } from "@/api/hotelApi";
import { defineStore } from "pinia";
import { useRouter } from 'vue-router';


export const useHotelStore = defineStore('hotel', {
    state: () => ({
        hotels: [],
        studentcourse: [],
        searchHotel: [],
        filterHotel: [],
        loading: false

    }),
    getters: {
        filter(state) {
            return (value) => state.courses.filter((course) =>
                course.course_name.toLowerCase().includes(value.toLowerCase()) || course.description.toLowerCase().includes(value.toLowerCase()) || course.categories.toLowerCase().includes(value.toLowerCase()) || (course.price <= value + 1000 && course.price >= value - 1000)
            );

        }

    },
    persist: true,
    actions: {
        async getstudentcoursestore() {
            await getstudentcourse().then((data) => (

                this.studentcourse = data.reverse()

            ))

        },
        async getallcourses() {

            await allcourses().then((data) => {
                this.hotels = data.reverse()
                this.filterHotel = this.hotels

            })

        },
        hideCourse(id) {

            this.hotels = this.hotels.filter(user => user.id != id);
            this.filterHotel= this.hotels

        },
        getOneCourse(id) {
            const router = useRouter()
            const course = this.hotels.filter((user) => user.id == id);

            if (course.length < 1) {
                router.push('/notfound')
                return
            }


            return course[0]
        },
        async createcourses(course_name, description, price, userId, categories, imageCourse) {
            return await createcourse(course_name, description, price, userId, categories, imageCourse).then(async () => await this.getallcourses())
        },
        async updatecourses(id, course_name, description, price, categories, imageCourse, userId) {
            const response = updatecourse(id, course_name, description, price, categories, imageCourse, userId)

            const data = await response.json()
            console.log("in store", data)
            if (data.status == 200) {
                await this.getallcourses()
                return data

            }

            return null

        },
        async removecourses(id) {
            await removecourse(id).then(async () => await this.getallcourses())
        }
        ,
        editCourses(id, course_name, description, price, categories, imageCourse, userId) {
            console.log(id, course_name, description, price, categories, imageCourse, userId)
            const index = this.hotels.findIndex(num => num.id === id);
            console.log(index)

            // this.hotels[index].course_name = course_name
            // this.hotels[index].description = description
            // this.hotels[index].price = price
            // this.hotels[index].categories = categories


        },
        filterStore(value) {
            this.filterHotel = this.hotels
            this.filterHotel = this.hotels.filter((course) =>
                course.titre.toLowerCase().includes(value.toLowerCase())  || (course.price <= value + 1000 && course.price >= value - 1000)
            );

            return this.filterHotel
        },
        filterStores(value) {
            this.searchHotel= this.hotels
            this.searchHotel= this.hotels.filter((course) =>
                course.course_name.toLowerCase().includes(value.toLowerCase()) || course.description.toLowerCase().includes(value.toLowerCase()) || course.categories.toLowerCase().includes(value.toLowerCase()) || (course.price <= value + 1000 && course.price >= value - 1000)
            );

            return this.searchCourse
        },
        payed(id){

            const course = this.studentcourse.filter((course) =>course.id == id);
            console.log("payer",course);
            if(course.length == 0){
                return false

            }else{
                return true
            }

        }

    }
})
