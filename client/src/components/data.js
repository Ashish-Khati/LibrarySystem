import l1 from '../assets/l1.png'
import l2 from '../assets/l2.png'
import l3 from '../assets/l3.png'
import l4 from '../assets/l4.png'
import l5 from '../assets/l5.png'
import l6 from '../assets/l6.png'
import l7 from '../assets/l7.png'
import l8 from '../assets/l8.png'
import l9 from '../assets/l9.png'
import l10 from '../assets/l10.png'
import l11 from '../assets/l11.png'
import l12 from '../assets/l12.png'
import v1 from '../assets/2.jpg'
import v2 from '../assets/3.jpg'
import v3 from '../assets/v1.jpg'
import v4 from '../assets/v2.jpg'
import t1 from '../assets/tst1.jpg'
import t2 from '../assets/tst2.jpg'
import t3 from '../assets/tst3.jpg'
import t4 from '../assets/tst4.jpg'
import Services from './Services'
const data = [
    {
        logo: l7,
        work: 'Cab Services',
        provider: 4
    },
    {
        logo: l4,
        work: 'Servicing',
        provider: 4
    },
    {
        logo: l8,
        work: 'Child Care',
        provider: 4
    },
    {
        logo: l4,
        work: 'Pediatrician',
        provider: 4
    },
    {
        logo: l5,
        work: 'Home Cleaning',
        provider: 4
    },
    {
        logo: l6,
        work: 'Laundary',
        provider: 4
    },
    {
        logo: l7,
        work: 'Carpainter',
        provider: 4
    },
    {
        logo: l8,
        work: 'Electrician',
        provider: 4
    },
    {
        logo: l9,
        work: 'Plumber',
        provider: 4
    },
    {
        logo: l11,
        work: 'Yoga',
        provider: 4
    },
    {
        logo: l9,
        work: 'Tution',
        provider: 4
    },
    {
        logo: l12,
        work: 'Gardening',
        provider: 4
    },
]


const vendorData = [
    {
        name: 'Mohan Rawat',
        address: "Delhi",
        imgUrl: v1,
        title: 'loremifuoeifwoiefawif jewfhrwjehkjqehqjh',
        status: true,
    },
    {
        name: 'Aman ',
        address: "uttarakhand",
        imgUrl: v2,
        title: 'loremifuoeifwoiefawif ',
        status: true,
    },
    {
        name: 'Gaurav',
        address: "Rishikesh",
        imgUrl: v3,
        title: 'loremifuoeifwoiefawif ',
        status: true,
    },
    {
        name: 'Ajay',
        address: "Dehradun",
        imgUrl: v4,
        title: 'loremifuoeifwoiefawif dfjsh dfhsjdluy fdjshfkjdfkjdkj dfjdk ',
        status: true,
    },
    {
        name: 'Sohan',
        address: "Mumbai",
        imgUrl: v4,
        title: 'loremifuoeifwoiefawif ',
        status: true,
    },
]

const testimonialData = [
    {
        imgUrl: t1,
        name: 'John',
        work: 'web developer',
        title: 'loremk fj the quick brown jfox jumps ofver the lazy dog.'
    },
    {
        imgUrl: t2,
        name: 'John',
        work: 'web developer',
        title: 'loremk fj the quick brown jfox jumps ofver the lazy dog.'
    },
    {
        imgUrl: t3,
        name: 'John',
        work: 'web developer',
        title: 'loremk fj the quick brown jfox jumps ofver the lazy dog.'
    },
    {
        imgUrl: t4,
        name: 'John',
        work: 'web developer',
        title: 'loremk fj the quick brown jfox jumps ofver the lazy dog.'
    },
    {
        imgUrl: t2,
        name: 'John',
        work: 'web developer',
        title: 'loremk fj the quick brown jfox jumps ofver the lazy dog.'
    },
]


const providerData = [
    {
        firstName: "John",
        lastName: "John",
        email: "abc@gmail.com",
        phone: 5783483478,
        rating: 3,
        work: 'Carpainter',
        title: "the dasjkuui dasj adsjo sdd j djdfj dfj",
        location: 'Delhi',
        imgUrl: v1,
        price: 1000,
        available: true
    },
    {
        name: "John",
        email: "abc@gmail.com",
        phone: 5783483478,
        rating: 3,
        work: 'Plumber',
        title: "the dasjkuui dasj adsjo sdd j djdfj dfj",
        location: 'Mumbai',
        imgUrl: v2,
        price: 1000,
        available: true
    },
    {
        name: "John",
        email: "abc@gmail.com",
        phone: 5783483478,
        rating: 3,
        work: 'Carpainter',
        title: "the dasjkuui dasj adsjo sdd j djdfj dfj",
        location: 'Delhi',
        imgUrl: v3,
        price: 1000,
        available: true
    },
    {
        name: "John",
        email: "abc@gmail.com",
        phone: 5783483478,
        rating: 3,
        work: 'Yoga',
        title: "the dasjkuui dasj adsjo sdd j djdfj dfj",
        location: 'Delhi',
        imgUrl: v4,
        price: 1000,
        available: true
    },
    {
        name: "John",
        email: "abc@gmail.com",
        phone: 5783483478,
        rating: 3,
        work: 'Teacher',
        title: "the dasjkuui dasj adsjo sdd j djdfj dfj",
        location: 'Delhi',
        imgUrl: t1,
        price: 1000,
        available: true
    },
    {
        name: "John",
        email: "abc@gmail.com",
        phone: 5783483478,
        rating: 3,
        work: 'Carpainter',
        title: "the dasjkuui dasj adsjo sdd j djdfj dfj",
        location: 'Delhi',
        imgUrl: t2,
        price: 1000,
        available: true
    },
    {
        name: "John",
        email: "abc@gmail.com",
        phone: 5783483478,
        rating: 3,
        work: 'Gardner',
        title: "the dasjkuui dasj adsjo sdd j djdfj dfj",
        location: 'Delhi',
        imgUrl: t3,
        price: 1000,
        available: true
    },
    {
        name: "John",
        email: "abc@gmail.com",
        phone: 5783483478,
        rating: 3,
        work: 'Child Care',
        title: "the dasjkuui dasj adsjo sdd j djdfj dfj",
        location: 'Delhi',
        imgUrl: t4,
        price: 1000,
        available: true
    },
    {
        name: "John",
        email: "abc@gmail.com",
        phone: 5783483478,
        rating: 3,
        work: 'Carpainter',
        title: "the dasjkuui dasj adsjo sdd j djdfj dfj",
        location: 'Delhi',
        imgUrl: v1,
        price: 1000,
        available: true
    },
    {
        name: "John",
        email: "abc@gmail.com",
        phone: 5783483478,
        rating: 3,
        work: 'Yoga',
        title: "the dasjkuui dasj adsjo sdd j djdfj dfj",
        location: 'Delhi',
        imgUrl: t1,
        price: 1000,
        available: true
    },

]
const categoryData = [
    { work: "Cab Services" },
    { work: "Car  Care  and Servicing" },
    { work: "Child Care" },
    { work: "Pediatrician" },
    { work: "Home Cleaning" },
    { work: "Landscaping" },
    { work: "Laundary" },
    { work: "Carpainter" },
    { work: "Electrician" },
    { work: "Plumber" },
    { work: "Yoga" },
    { work: "Gym Trainer" },

]

export { data, categoryData, vendorData, testimonialData, providerData }