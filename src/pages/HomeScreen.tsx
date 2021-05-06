import { Divider } from "semantic-ui-react";
import { Header } from "../components/header/Header";
import { CustomCard } from "../components/card/Card";
import { CustomSection } from "../components/section/CustomSection";
import { Footer } from "../components/footer/Footer";

interface CardText {
    title: string;
    subTitle: string;
    description: string;
    image: "createAccount" | "checkout" | "exploreHome";
}

const cardText: CardText[] = [
    {
        title: "Create an account",
        subTitle: "Create/login to an existing \n account to get started",
        description:
            "An account is created with your email \n and desired password",
        image: "createAccount",
    },
    {
        title: "Explore varietes",
        subTitle: "Shop for your favorites \n meal as e dey hot.",
        description:
            "Shop for your favorite meals or drinks \n and enjoy while doing it.",
        image: "exploreHome",
    },
    {
        title: "Checkout",
        subTitle: "When you done check out \n and get it delivered.",
        description:
            "When you done check out and get it \n delivered with ease.",
        image: "checkout",
    },
];

export const HomeScreen = () => {
    return (
        <div className="">
            {/* Header */}
            {/* <img src={LogoHeader}  alt="LogoHeader"/> */}
            <div className="py-4" style={{}}>
                <Header />
                {/* <Divider className="d-block" /> */}
                {/* cards */}
                <div className="my-5">
                    <Divider className="w-50 centrarVerticalMargin border border-black" />
                    <h2
                        className="text-center h1 mb-5"
                        style={{ fontWeight: "bold" }}
                    >
                        How the app woks
                    </h2>
                    {cardText.map(
                        ({ title, description, subTitle, image }, index) => {
                            return (
                                <CustomCard
                                    key={index}
                                    title={title}
                                    subTitle={subTitle}
                                    description={description}
                                    inverted={index % 2 === 0 ? false : true}
                                    svg={image}
                                />
                            );
                        }
                    )}
                </div>
                {/* section */}
                <CustomSection />
                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
};
