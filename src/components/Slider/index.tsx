'use client'

// Import CSS do Swiper
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'

export default function Slider() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            direction="horizontal"
            loop={true}
            pagination={{ clickable: true }}
            navigation
            scrollbar={{ draggable: true }}
            className="h-64 w-full"
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
    )
}
