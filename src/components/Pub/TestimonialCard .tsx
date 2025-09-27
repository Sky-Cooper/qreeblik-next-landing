
interface TestimonialCardProps {
    quote: string;
    name: string;
    title: string;
    imageSrc: string;
}

const TestimonialCard = ({ quote, name, title, imageSrc }: TestimonialCardProps) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center scroll-animate">
        <img src={imageSrc} alt={name} className="w-20 h-20 rounded-full mb-6 border-4 border-blue-200"/>
        <p className="text-slate-600 italic mb-6">"{quote}"</p>
        <div className="mt-auto">
            <h4 className="font-bold text-slate-900">{name}</h4>
            <p className="text-blue-600 text-sm font-semibold">{title}</p>
        </div>
    </div>
);
const TestimonialsSection = () => (
     <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12 scroll-animate">
                <span className="text-blue-600 font-semibold uppercase tracking-wider">Ils nous font confiance</span>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mt-2 text-slate-900">L'avis de vos confrères.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                 <TestimonialCard
                    quote="Qreeb Lik a divisé par deux mon temps de gestion administrative. Je peux enfin me concentrer pleinement sur mes consultations."
                    name="Dr. Fatima El Farassi"
                    title="Cardiologue, Casablanca"
                    imageSrc="https://placehold.co/100x100/E0E7FF/4F46E5?text=FEF"
                />
                <TestimonialCard
                    quote="La plateforme est incroyablement intuitive. Mon assistante l'a adoptée en moins d'une journée. Un vrai gain d'efficacité pour toute l'équipe."
                    name="Dr. Ahmed Amani"
                    title="Pédiatre, Rabat"
                    imageSrc="https://placehold.co/100x100/E0E7FF/4F46E5?text=YA"
                />
                <TestimonialCard
                    quote="J'ai vu une augmentation de 20% de nouveaux patients depuis que j'utilise Qreeb Lik. La visibilité est excellente."
                    name="Dr. Sofia Habchour"
                    title="Dermatologue, Marrakech"
                    imageSrc="https://placehold.co/100x100/E0E7FF/4F46E5?text=SB"
                />
            </div>
        </div>
    </section>
);
export default TestimonialsSection;