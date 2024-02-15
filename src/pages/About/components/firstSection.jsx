
import './firstSection.sass'
import banner from "../../../assets/img/header2.png"
export const FirstSectionAbout = () => {
    return (
        <>
            <div className='relative object-cover pt-[68px]'>
                <img src={banner} alt="" />
                <h1 className='absolute top-[50%] left-[50%] text-white font-bold text-5xl translate-x-[-50%] translate-y-[-50%]'>CONTACT</h1>
            </div>
            <div className='py-16 flex justify-center gap-7 '>
                <div className='bannerParent w-[22%] h-[50vh] '>
                    <div className='banner'>
                        {/* <img src={banner}  /> */}
                    </div>
                </div>
                <div className='w-[50%] flex flex-col gap-4'>
                    <h1 className='text-xl font-medium '>Our story</h1>
                    <p className='text-slate-500'>Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.</p>
                    <div className='border-l-4 px-4 text-slate-500'>
                        <p>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.</p>
                        <p>- Steve Job’s</p>
                    </div>
                </div>
            </div>
        </>
    )
}
