import Image from 'next/image';

interface TestimonialCardProps {
    quote: string;
    name: string;
    title: string;
    imageSrc: string;
}

// ✅ Corrected TestimonialCard component
const TestimonialCard = ({ quote, name, title, imageSrc }: TestimonialCardProps) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center scroll-animate">
        {/* ✅ Changed <img> to <Image> and added width/height */}
        <Image
            src={imageSrc}
            alt={name}
            width={80}  // w-20 corresponds to 80px
            height={80} // h-20 corresponds to 80px
            className="w-20 h-20 rounded-full mb-6 border-4 border-blue-200"
        />
        {/* ✅ Escaped quotes with &quot; */}
        <p className="text-slate-600 italic mb-6">&quot;{quote}&quot;</p>
        <div className="mt-auto">
            <h4 className="font-bold text-slate-900">{name}</h4>
            <p className="text-blue-600 text-sm font-semibold">{title}</p>
        </div>
    </div>
);

// ✅ Corrected TestimonialsSection component
const TestimonialsSection = () => (
    <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12 scroll-animate">
                <span className="text-blue-600 font-semibold uppercase tracking-wider">Ils nous font confiance</span>
                {/* ✅ Escaped apostrophe with &apos; */}
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mt-2 text-slate-900">L&apos;avis de vos confrères.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <TestimonialCard
                    quote="Qreeb Lik a divisé par deux mon temps de gestion administrative. Je peux enfin me concentrer pleinement sur mes consultations."
                    name="Dr. Fatima El Farassi"
                    title="Cardiologue, Casablanca"
                    imageSrc="/assets/Gemini_Generated_Image_t041lht041lht041.png"
                />
                <TestimonialCard
                    // ✅ Escaped apostrophes in the quote
                    quote="La plateforme est incroyablement intuitive. Mon assistante l&apos;a adoptée en moins d&apos;une journée. Un vrai gain d&apos;efficacité pour toute l&apos;équipe."
                    name="Dr. Ahmed Amani"
                    title="Pédiatre, Rabat"
                    imageSrc="/assets/Gemini_Generated_Image_t041lht041lht041.png"
                />
                <TestimonialCard
                    // ✅ Escaped apostrophe in the quote
                    quote="J&apos;ai vu une augmentation de 20% de nouveaux patients depuis que j&apos;utilise Qreeb Lik. La visibilité est excellente."
                    name="Dr. Sofia Habchour"
                    title="Dermatologue, Marrakech"
                    imageSrc="/assets/Gemini_Generated_Image_t041lht041lht041.png"
                />
            </div>
        </div>
    </section>
);

export default TestimonialsSection;