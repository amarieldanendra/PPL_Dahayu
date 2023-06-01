// Komponen footer untuk layout pada website
export default function Footer(){
    return(
        <footer
            className="w-full h-[170px] px-[75px] bg-[#8A9A5B] flex items-center justify-between"
        >
            <div
                className="flex flex-col items-center"
            >
                <p className="font-dosis font-bold text-xl">Information</p>
                <a className="text-xl font-dosis mt-3" href="#">About Us</a>
                <a className="text-xl font-dosis mt-3" href="#">Contact Us</a>
            </div>
            <div
                className="flex flex-col items-center"
            >
                <p className="font-dosis font-bold text-xl">Customer Care</p>
                <a className="text-xl font-dosis mt-3 flex items-center" href="#">
                    <svg className="mr-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.05 18C0.75 18 0.5 17.9 0.3 17.7C0.0999999 17.5 0 17.25 0 16.95V12.9C0 12.6667 0.0749999 12.4623 0.225 12.287C0.375 12.1117 0.566667 11.9993 0.8 11.95L4.25 11.25C4.48333 11.2167 4.721 11.2377 4.963 11.313C5.205 11.3883 5.40067 11.5007 5.55 11.65L7.9 14C9.16667 13.2333 10.325 12.325 11.375 11.275C12.425 10.225 13.3 9.1 14 7.9L11.6 5.45C11.45 5.3 11.354 5.129 11.312 4.937C11.27 4.745 11.266 4.53267 11.3 4.3L11.95 0.8C11.9833 0.566667 12.0917 0.375 12.275 0.225C12.4583 0.0749999 12.6667 0 12.9 0H16.95C17.25 0 17.5 0.0999999 17.7 0.3C17.9 0.5 18 0.75 18 1.05C18 3.2 17.5207 5.296 16.562 7.338C15.6033 9.38 14.3367 11.1883 12.762 12.763C11.1873 14.3377 9.379 15.6043 7.337 16.563C5.295 17.5217 3.19933 18.0007 1.05 18Z" fill="#F4EBD0"/>
                    </svg>
                    (021) 53689722
                </a>
                <a className="text-xl font-dosis mt-3 flex items-center" href="#">
                    <svg className="mr-3" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 24.5125C10.36 24.5125 8.81 24.1906 7.35 23.5467C5.89 22.9029 4.6148 22.0245 3.5244 20.9116C2.4348 19.7988 1.5748 18.4967 0.944401 17.0056C0.314001 15.5144 -0.000798479 13.9313 1.52091e-06 12.2563C1.52091e-06 10.5608 0.315202 8.9724 0.945602 7.49103C1.576 6.00965 2.436 4.71294 3.5256 3.60089C4.6152 2.4872 5.8896 1.60884 7.3488 0.965793C8.808 0.322748 10.3584 0.000817084 12 0C13.66 0 15.2152 0.321931 16.6656 0.965793C18.116 1.60966 19.3856 2.48802 20.4744 3.60089C21.5648 4.71376 22.4248 6.01088 23.0544 7.49225C23.684 8.97362 23.9992 10.5616 24 12.2563V14.0334C24 15.2386 23.5952 16.2653 22.7856 17.1134C21.976 17.9615 20.9808 18.3852 19.8 18.3844C19.08 18.3844 18.41 18.221 17.79 17.8941C17.17 17.5673 16.66 17.1383 16.26 16.6072C15.72 17.1588 15.0848 17.593 14.3544 17.9101C13.624 18.2271 12.8392 18.3852 12 18.3844C10.34 18.3844 8.9248 17.7867 7.7544 16.5913C6.584 15.3959 5.9992 13.9509 6 12.2563C6 10.5608 6.5852 9.11539 7.7556 7.91999C8.926 6.7246 10.3408 6.12731 12 6.12813C13.66 6.12813 15.0752 6.72583 16.2456 7.92122C17.416 9.11661 18.0008 10.5616 18 12.2563V14.0334C18 14.6258 18.18 15.0903 18.54 15.427C18.9 15.7636 19.32 15.9323 19.8 15.9331C20.28 15.9331 20.7 15.7644 21.06 15.427C21.42 15.0895 21.6 14.625 21.6 14.0334V12.2563C21.6 9.58031 20.6548 7.27695 18.7644 5.34618C16.874 3.41541 14.6192 2.45043 12 2.45125C9.38 2.45125 7.1248 3.41664 5.2344 5.34741C3.344 7.27817 2.3992 9.58113 2.4 12.2563C2.4 14.9322 3.3452 17.2356 5.2356 19.1663C7.126 21.0971 9.3808 22.0621 12 22.0613H18V24.5125H12ZM12 15.9331C13 15.9331 13.85 15.5757 14.55 14.8607C15.25 14.1458 15.6 13.2776 15.6 12.2563C15.6 11.2349 15.25 10.3668 14.55 9.6518C13.85 8.93686 13 8.57938 12 8.57938C11 8.57938 10.15 8.93686 9.45 9.6518C8.75 10.3668 8.4 11.2349 8.4 12.2563C8.4 13.2776 8.75 14.1458 9.45 14.8607C10.15 15.5757 11 15.9331 12 15.9331Z" fill="#F4EBD0"/>
                    </svg>
                    dahayu.cs@gmail.com
                </a>
            </div>
            <div
                className="flex flex-col items-center"
            >
                <p className="font-dosis font-bold text-xl">Follow Us On</p>
                <div
                    className="flex"
                >
                    <a className="text-xl font-dosis mt-3" href="#">
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 19.2015C14.5 19.2015 13.2 17.9758 13.2 16.3417C13.2 14.8096 14.4 13.4819 16 13.4819C17.5 13.4819 18.8 14.7075 18.8 16.3417C18.8 17.8737 17.5 19.2015 16 19.2015Z" fill="#F4EBD0"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M19.4 9.39646H12.6C11.8 9.4986 11.4 9.60073 11.1 9.70287C10.7 9.80501 10.4 10.0093 10.1 10.3157C9.86261 10.5581 9.75045 10.8006 9.61489 11.0937C9.57916 11.1709 9.5417 11.2518 9.5 11.337C9.48453 11.3844 9.46667 11.4343 9.44752 11.4877C9.34291 11.7796 9.2 12.1784 9.2 12.8691V19.8143C9.3 20.6314 9.4 21.0399 9.5 21.3463C9.6 21.7549 9.8 22.0613 10.1 22.3677C10.3374 22.6101 10.5748 22.7247 10.8617 22.8631C10.9374 22.8997 11.0165 22.9378 11.1 22.9805C11.1464 22.9963 11.1952 23.0145 11.2475 23.0341C11.5333 23.1409 11.9238 23.2869 12.6 23.2869H19.4C20.2 23.1848 20.6 23.0826 20.9 22.9805C21.3 22.8783 21.6 22.6741 21.9 22.3677C22.1374 22.1252 22.2495 21.8828 22.3851 21.5897C22.4209 21.5124 22.4583 21.4316 22.5 21.3463C22.5155 21.2989 22.5333 21.2491 22.5525 21.1956C22.6571 20.9037 22.8 20.505 22.8 19.8143V12.8691C22.7 12.052 22.6 11.6434 22.5 11.337C22.4 10.9285 22.2 10.6221 21.9 10.3157C21.6626 10.0732 21.4252 9.95867 21.1383 9.82021C21.0627 9.78374 20.9833 9.74543 20.9 9.70287C20.8536 9.68707 20.8048 9.66882 20.7525 9.64927C20.4667 9.54242 20.0762 9.39646 19.4 9.39646ZM16 11.9498C13.6 11.9498 11.7 13.8904 11.7 16.3417C11.7 18.7929 13.6 20.7335 16 20.7335C18.4 20.7335 20.3 18.7929 20.3 16.3417C20.3 13.8904 18.4 11.9498 16 11.9498ZM21.4 11.8477C21.4 12.4118 20.9523 12.8691 20.4 12.8691C19.8477 12.8691 19.4 12.4118 19.4 11.8477C19.4 11.2836 19.8477 10.8264 20.4 10.8264C20.9523 10.8264 21.4 11.2836 21.4 11.8477Z" fill="#F4EBD0"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 5.10677C0 2.28638 2.23858 0 5 0H27C29.7614 0 32 2.28638 32 5.10677V27.5766C32 30.397 29.7614 32.6834 27 32.6834H5C2.23858 32.6834 0 30.397 0 27.5766V5.10677ZM12.6 7.86443H19.4C20.3 7.96657 20.9 8.0687 21.4 8.27297C22 8.57938 22.4 8.78365 22.9 9.29433C23.4 9.80501 23.7 10.3157 23.9 10.8264C24.1 11.337 24.3 11.9499 24.3 12.8691V19.8143C24.2 20.7335 24.1 21.3463 23.9 21.857C23.6 22.4698 23.4 22.8783 22.9 23.389C22.4 23.8997 21.9 24.2061 21.4 24.4104C20.9 24.6147 20.3 24.8189 19.4 24.8189H12.6C11.7 24.7168 11.1 24.6147 10.6 24.4104C10 24.104 9.6 23.8997 9.1 23.389C8.6 22.8783 8.3 22.3677 8.1 21.857C7.9 21.3463 7.7 20.7335 7.7 19.8143V12.8691C7.8 11.9499 7.9 11.337 8.1 10.8264C8.4 10.2135 8.6 9.80501 9.1 9.29433C9.6 8.78365 10.1 8.47724 10.6 8.27297C11.1 8.0687 11.7 7.86443 12.6 7.86443Z" fill="#F4EBD0"/>
                        </svg>
                    </a>
                    <a className="text-xl font-dosis mt-3 mx-3" href="#">
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 5.10677C0 2.28638 2.23858 0 5 0H27C29.7614 0 32 2.28638 32 5.10677V27.5766C32 30.397 29.7614 32.6834 27 32.6834H5C2.23858 32.6834 0 30.397 0 27.5766V5.10677ZM22.1 11.7456C22.8 11.6434 23.4 11.5413 24 11.2349C23.6 11.9499 23 12.5627 22.3 12.9712C22.5 17.7716 19.1 22.9805 13 22.9805C11.2 22.9805 9.5 22.3677 8 21.4485C9.7 21.6527 11.5 21.142 12.7 20.2228C11.2 20.2228 10 19.2015 9.6 17.8737C10.1 17.9758 10.6 17.8737 11.1 17.7716C9.6 17.363 8.5 15.9331 8.5 14.4011C9 14.6054 9.5 14.8096 10 14.8096C8.6 13.7883 8.1 11.8477 9 10.3157C10.7 12.3584 13.1 13.6862 15.8 13.7883C15.3 11.7456 16.9 9.70287 19 9.70287C19.9 9.70287 20.8 10.1114 21.4 10.7242C22.2 10.52 22.9 10.3157 23.5 9.90714C23.3 10.7242 22.8 11.337 22.1 11.7456Z" fill="#F4EBD0"/>
                        </svg>
                    </a>
                    <a className="text-xl font-dosis mt-3" href="#">
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 5.10677C0 2.28638 2.23858 0 5 0H27C29.7614 0 32 2.28638 32 5.10677V27.5766C32 30.397 29.7614 32.6834 27 32.6834H5C2.23858 32.6834 0 30.397 0 27.5766V5.10677ZM16 8.17084C20.4 8.17084 24 11.8477 24 16.3417C24 20.4271 21.1 23.8997 17.1 24.5125V18.6908H19L19.4 16.3417H17.2V14.8096C17.2 14.1968 17.5 13.584 18.5 13.584H19.5V11.5413C19.5 11.5413 18.6 11.337 17.7 11.337C15.9 11.337 14.7 12.4605 14.7 14.5032V16.3417H12.7V18.6908H14.7V24.4104C10.9 23.7976 8 20.4271 8 16.3417C8 11.8477 11.6 8.17084 16 8.17084Z" fill="#F4EBD0"/>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}