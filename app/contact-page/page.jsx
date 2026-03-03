import Footer from "../components/Footer";
import Form from "../components/Form";
import NavBar from "../components/NavBar";
import Hero from "./components/Hero";

export default function Contact() {
  return (
    <main className="font-nunito">
      <div>
        <NavBar />
        <Hero />
        <div className="flex items-center justify-center my-20 mx-auto max-w-2xl">
          <Form />
        </div>
        <Footer />
      </div>
    </main>
  );
}
