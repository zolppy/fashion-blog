import { BsX } from "react-icons/bs";
import { AnimatePresence, motion, Variants } from "framer-motion";
import SubscribeButtonRed from "../SubscribeButtonRed";
import { openSans } from "@/app/utils/font";

interface ISubscriptionModal {
    modalIsOpen: boolean;
    closeSubscriptionModal: () => void;
}

const variant: Variants = {
    initial: { opacity: 0 },
    visible: { opacity: 0.5 },
    hidden: { opacity: 0 },
};

const variant2: Variants = {
    initial: { opacity: 0 },
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const SubscriptionModal = ({
    modalIsOpen,
    closeSubscriptionModal,
}: ISubscriptionModal) => {
    return (
        <AnimatePresence>
            {modalIsOpen && (
                <>
                    <motion.div
                        variants={variant}
                        initial="initial"
                        animate="visible"
                        exit="hidden"
                        transition={{ type: "spring", duration: 0.8 }}
                        className="fixed top-0 left-0 w-svw h-svh bg-black opacity-50"
                    ></motion.div>
                    <motion.div
                        variants={variant2}
                        initial="initial"
                        animate="visible"
                        exit="hidden"
                        transition={{ type: "spring", duration: 0.8 }}
                        className="fixed w-[90%] p-4 top-1/2 left-1/2 bg-white -translate-y-1/2 -translate-x-1/2 flex flex-col gap-y-4"
                    >
                        <div className="flex items-center justify-between">
                            <h2 className="uppercase text-4xl">Subscribe</h2>
                            <button onClick={closeSubscriptionModal}>
                                <BsX className="text-4xl" />
                            </button>
                        </div>
                        <form
                            className={`${openSans.className} flex flex-col gap-y-4`}
                        >
                            <p>
                                Enter your e-mail below and get notified on the
                                latest blog posts.
                            </p>
                            <input
                                type="text"
                                placeholder="Enter e-mail"
                                aria-label="Enter e-mail"
                                required
                                className="border p-2"
                            />
                            <SubscribeButtonRed>Subscribe</SubscribeButtonRed>
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default SubscriptionModal;
