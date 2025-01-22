import { Heading } from "../components/shared/Heading";
import { Partner } from "../components/partner/Partner";
import { Button } from "../components/shared/Button";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/Footer/Footer";

export const About = () => {
  return (
    <div className="bg-white dark:bg-gray-700 dark:text-white overflow-hidden duration-200">
      <Navbar />
      {/* Banner Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-lg">
            Learn more about our journey and values.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <Heading
            title="Who We Are"
            subtitle="We are a leading tech company providing innovative gadgets to enhance your daily life."
          />
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our mission is to deliver cutting-edge technology that empowers
            individuals and businesses alike. From sleek smartphones to
            state-of-the-art headphones, our products are designed with you in
            mind.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <Heading
            title="Our Vision"
            subtitle="Innovating for a better tomorrow."
          />
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            At our core, we believe in harnessing technology to create solutions
            that inspire and connect people globally. Our vision is to be a
            leader in sustainable innovation, ensuring a brighter future for
            generations to come.
          </p>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-blue-50 dark:bg-gray-800">
        <div className="container mx-auto text-center">
          <Heading
            title="Stay Updated"
            subtitle="Subscribe to our newsletter for the latest updates and offers."
          />
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full sm:w-80 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
            <Button
              text="Subscribe"
              bgColor="bg-blue-600"
              textColor="text-white"
              className="px-6 py-2 rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <Heading
            title="Get in Touch"
            subtitle="We'd love to hear from you!"
          />
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-6">
            <div className="text-left">
              <h2 className="text-xl font-semibold">Address</h2>
              <p>Mbezi, Dar-es-Salaam, Tanzania</p>
            </div>
            <div className="text-left">
              <h2 className="text-xl font-semibold">Phone</h2>
              <p>+255 746-342-550</p>
            </div>
            <div className="text-left">
              <h2 className="text-xl font-semibold">Email</h2>
              <p>info@samsung.com</p>
            </div>
          </div>
          <div className="mt-8">
            <Button
              text="Contact Us"
              bgColor="bg-blue-600"
              textColor="text-white"
              className="px-6 py-2 rounded-lg"
            />
          </div>
        </div>
      </section>
      <Partner />

      <Footer />
    </div>
  );
};
