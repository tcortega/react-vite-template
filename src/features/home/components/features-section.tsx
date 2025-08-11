import { FeatureCard } from "./feature-card";

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description:
      "Built with performance in mind, delivering blazing fast user experiences.",
  },
  {
    icon: "🔒",
    title: "Secure by Default",
    description:
      "Enterprise-grade security with best practices built into every layer.",
  },
  {
    icon: "🚀",
    title: "Easy to Scale",
    description:
      "Grow your application seamlessly with our scalable architecture.",
  },
];

export function FeaturesSection() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-400">
          Discover the features that make us stand out
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}
