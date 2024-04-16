import { Link } from "react-router-dom"

const Contact = ({ contact }) => {
    return (
        <section className="mb-8">
        <Link
            to={`${contact._id}`}
            className=""
        >
            <span
                className=""
            ></span>
            
            <div className="flex md:gap-12 border-2 border-gray-500 p-9 sm:gap-8 w-72 hover:border-yellow-300 pl-3">
                <div className="">
                <img
                    src="https://icon-library.com/images/contacts-icon-png/contacts-icon-png-16.jpg"
                    className="size-16"
                    />
                </div>
                <div className="flex flex-col items-end">
                    <h3 className="md:text-lg text-white-900 sm:text-xl">
                        {contact.fullName}
                    </h3>
                    <p className="mt-2 text-xs font-medium text-gray-400">{contact.phone}</p>
                </div>

                
            </div>
        </Link>
        </section>
    )
}

export default Contact