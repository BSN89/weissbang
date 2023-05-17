import React, {Component} from 'react';
import gallery from "./Gallery.module.css"

class Gallery extends Component {
    render() {
        return (
            <div className={gallery.divWrapper}>
                <div className={gallery.box}><img className={gallery.imgGallery} src="https://bipbap.ru/wp-content/uploads/2017/08/1375998858_1953444020.jpg " alt=""/></div>
                <div className={gallery.box}><img className={gallery.imgGallery}
                    src="https://giffs.ru/wp-content/uploads/2021/12/Krasivye-kartinki-na-rabochiy-stol-na-ves-ekran-v-horoshem-kachestve_02.jpg"
                    alt=""/></div>
                <div className={gallery.box}><img className={gallery.imgGallery} src="https://oir.mobi/uploads/posts/2021-03/1616718561_25-p-skandinaviya-krasivo-29.jpg"
                          alt=""/></div>
                <div className={gallery.box}><img className={gallery.imgGallery}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpIwyBG1VgR3VdiIOyoU2uL89WplNL52I_dc7OgZrg&s"
                    alt=""/></div>
                <div className={gallery.box}><img className={gallery.imgGallery}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_L_1UuxKR5JvjBVN2XswhCMPp5KPUzb1MNdj01fh8PHDwzazC6WJ09AYHk8Jmvx0vR1g&usqp=CAU"
                    alt=""/></div>
                <div className={gallery.box}><img className={gallery.imgGallery}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4b1iaJFPEQobyc7VxRxHU4dSIk4W8umr2n2ZxqelKnNsMEHU3OVnunIjU8Hra4Dozz0&usqp=CAU"
                    alt=""/></div>
                <div className={gallery.box}><img className={gallery.imgGallery}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBumnISxZUwyn1cRvcMIK78G6LdJ-J1z6GAlW-ReW41yTk63Kh-c_vZKvLVodLJQzZvGs&usqp=CAU"
                    alt=""/></div>
                <div className={gallery.box}><img className={gallery.imgGallery} src="https://p7.tabor.ru/feed/2021-07-20/32499648/3345528_760x500.jpg" alt=""/></div>
                <div className={gallery.box}><img className={gallery.imgGallery} src="https://cojo.ru/wp-content/uploads/2023/01/vankuver-gorod-v-kanade-7.webp" alt=""/></div>
            </div>
        );
    }
}

export default Gallery;