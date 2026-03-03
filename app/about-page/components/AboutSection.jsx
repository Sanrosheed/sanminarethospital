"use client";
import Image from "next/image";
import Link from "next/link";
import doctor1 from "../../../public/MinHero4.jpg";
import doctor2 from "../../../public/MinHero4.jpg";
import Images from "./Images";

export default function AboutSection() {
  return (
    <section className="w-full bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
          <Image src={doctor1} alt="Doctor" fill className="object-cover" />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            10+ Years of Excellence <br /> in Trusted Clinical Care
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            For over a decade, San Minaret has stood as a beacon of exceptional
            healthcare. With a legacy of over 10+ years, we have earned your
            trust by consistently delivering unparalleled medical services.
          </p>

          <div className="mt-8 space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-lg">Excellence in Care</h4>
                <p className="text-gray-600 text-sm">
                  Experienced healthcare at its finest tailored to your needs.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  Cutting-Edge Solutions
                </h4>
                <p className="text-gray-600 text-sm">
                  Advanced treatments aligned with modern innovations.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  Patient-Centric Approach
                </h4>
                <p className="text-gray-600 text-sm">
                  Compassion and respect at the heart of every service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== MIDDLE SECTION ========== */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            We Aim to Provide the Best Service Experience
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600">
            Our mission is to provide services that redefine excellence,
            ensuring you receive not just medical attention, but compassion and
            support.
          </p>

          <div className="mt-14 grid md:grid-cols-3 gap-10 text-left">
            <div>
              <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center text-white mb-4">
                ✓
              </div>
              <h4 className="font-semibold text-lg">
                Personalized Wellness Plans
              </h4>
              <p className="text-gray-600 text-sm mt-2">
                Care plans tailored to your unique health needs.
              </p>
            </div>

            <div>
              <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center text-white mb-4">
                ✓
              </div>
              <h4 className="font-semibold text-lg">
                Experienced Medical Professionals
              </h4>
              <p className="text-gray-600 text-sm mt-2">
                Our doctors and nurses are highly trained and compassionate.
              </p>
            </div>

            <div>
              <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center text-white mb-4">
                ✓
              </div>
              <h4 className="font-semibold text-lg">24/7 Emergency Support</h4>
              <p className="text-gray-600 text-sm mt-2">
                Our emergency unit is always ready to serve you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Images />

      {/* ========== BOTTOM CTA SECTION ========== */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="relative bg-blue-900 rounded-3xl p-12 overflow-hidden grid lg:grid-cols-2 items-center">
          {/* Text */}
          <div className="text-white">
            <h2 className="text-4xl font-bold leading-tight">
              Discover Outstanding Healthcare Services at Our Hospital
            </h2>

            <Link href="/contact-page">
              <button className="mt-8 bg-white text-blue-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
                Book Appointment
              </button>
            </Link>
          </div>

          {/* Doctor Image */}
          <div className="relative w-full h-[350px] mt-10 lg:mt-0">
            <Image src={doctor2} alt="Doctor" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
