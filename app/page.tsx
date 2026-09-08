"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  CircleHelp,
  ClipboardList,
  FileText,
  ImageIcon,
  Lightbulb,
  Monitor,
  Sparkles,
  UploadCloud,
  Users,
  Video,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const steps = [
  { title: "Basic Info", eyebrow: "Identity" },
  { title: "Campaign Setup", eyebrow: "Priorities" },
  { title: "Assets & Branding", eyebrow: "Finish" },
];

const offices = [
  "Governor",
  "Mayor",
  "City Council",
  "State Senate",
  "School Board",
  "Other",
];

const parties = [
  "Democratic",
  "Republican",
  "Independent",
  "Nonpartisan",
  "Other",
];

const years = ["2026", "2027", "2028", "2029", "2030"];

const primaryActions = [
  "Donate",
  "Volunteer",
  "Join the Campaign",
  "Attend an Event",
  "Request a Yard Sign",
  "Register to Vote",
  "Contact the Campaign",
];

const additionalActions = [
  "Volunteer",
  "Attend an Event",
  "Register to Vote",
  "Share Your Story",
  "Host an Event",
];

const mayorIssues = [
  "Public Safety",
  "Housing & Affordability",
  "Jobs & Local Economy",
  "Education",
  "Homelessness",
  "Transportation",
  "Infrastructure",
  "Taxes & City Budget",
  "Small Businesses",
  "Public Health",
  "Environment",
  "Government Accountability",
  "Arts & Culture",
  "Seniors",
  "Other",
];

const governorIssues = [
  "Economy & Jobs",
  "Taxes",
  "Housing",
  "Education",
  "Healthcare",
  "Public Safety",
  "Immigration",
  "Transportation",
  "Infrastructure",
  "Energy",
  "Environment",
  "Agriculture & Water",
  "Wildfire / Emergency Response",
  "State Budget",
  "Government Accountability",
  "Small Business",
  "Veterans",
  "Reproductive Policy",
  "Civil Rights",
  "Other",
];

const localIssues = [
  "Public Safety",
  "Housing & Affordability",
  "Transportation",
  "Infrastructure",
  "Small Business",
  "Parks & Community Spaces",
  "Education",
  "Government Accountability",
  "Other",
];

const bioOptions = [
  "Current elected official",
  "Former elected official",
  "Business owner",
  "Military / Veteran",
  "Law enforcement",
  "Teacher / Educator",
  "Attorney",
  "Healthcare professional",
  "Community organizer",
  "Parent / Family story",
  "Immigrant / family immigration story",
  "Lifelong local resident",
  "Nonprofit experience",
  "Public service",
  "Other",
];

const sloganIdeas = [
  "A Safer, Stronger Springfield",
  "Leadership That Works for Springfield",
  "A New Direction for Springfield",
];

const toneOptions = [
  "Traditional",
  "Modern",
  "Grassroots",
  "Leadership",
  "Hopeful",
  "Bold",
];

const designStyles = [
  {
    title: "Traditional",
    subtitle: "Classic & trustworthy",
    palette: "from-slate-200 via-white to-slate-300",
  },
  {
    title: "Modern",
    subtitle: "Clean & contemporary",
    palette: "from-blue-600 via-white to-red-500",
  },
  {
    title: "Grassroots",
    subtitle: "People-focused",
    palette: "from-emerald-500 via-sky-100 to-blue-700",
  },
  {
    title: "Leadership",
    subtitle: "Bold & professional",
    palette: "from-slate-900 via-blue-700 to-slate-200",
  },
  {
    title: "Hopeful",
    subtitle: "Optimistic & warm",
    palette: "from-amber-300 via-white to-sky-300",
  },
  {
    title: "Bold",
    subtitle: "High impact & energetic",
    palette: "from-red-600 via-white to-blue-700",
  },
];

const assetCards = [
  {
    title: "Campaign logo",
    subtitle: "PNG, JPG or SVG",
    action: "Upload",
    icon: ImageIcon,
  },
  {
    title: "Photos",
    subtitle: "Campaign events, etc.",
    action: "Upload",
    icon: ImageIcon,
  },
  {
    title: "Campaign video",
    subtitle: "YouTube or Vimeo link",
    action: "Add link",
    icon: Video,
  },
  {
    title: "Endorsements",
    subtitle: "Quotes or logos",
    action: "Add",
    icon: Users,
  },
  {
    title: "Policy docs",
    subtitle: "PDFs or documents",
    action: "Upload",
    icon: FileText,
  },
];

const nextPanels = [
  {
    title: "What happens next",
    copy: "We'll use your answers to tailor issue options, page structure, and campaign messaging.",
    items: [
      [
        "Tailored issue options",
        "Get relevant issue suggestions based on your race and location.",
        ClipboardList,
      ],
      [
        "Suggested campaign slogan",
        "We'll generate slogan ideas you can use or refine.",
        Lightbulb,
      ],
      [
        "Auto-generated website structure",
        "Get a ready-to-edit website with the right pages for your campaign.",
        Building2,
      ],
    ],
    quote: "A stronger democracy starts with more voices online.",
  },
  {
    title: "What happens next",
    copy: "We'll turn your selections into homepage messaging, issue pages, and supporter flows.",
    items: [
      [
        "Issue-based website sections",
        "We'll build tailored pages around your campaign priorities.",
        ClipboardList,
      ],
      [
        "Suggested homepage copy",
        "We'll generate headline, slogan, and CTA ideas for review.",
        Lightbulb,
      ],
      [
        "Supporter action setup",
        "We'll configure donate, volunteer, and signup paths based on your choices.",
        Users,
      ],
    ],
    quote: "Every campaign starts with a clear message.",
  },
  {
    title: "What happens next",
    copy: "We'll use your assets and brand choices to create your complete campaign website.",
    items: [
      [
        "Generate homepage copy",
        "We'll use your photo, slogan, and key details to write compelling content.",
        ClipboardList,
      ],
      [
        "Build your website structure",
        "We'll create the right pages for your campaign, with your assets in place.",
        Building2,
      ],
      [
        "Deliver your campaign site",
        "You'll get a fully designed website that's ready to review and launch.",
        Monitor,
      ],
    ],
    quote: "Better campaigns build brighter tomorrows.",
  },
];

function toggleItem(items: string[], item: string, max?: number) {
  if (items.includes(item)) {
    return items.filter((value) => value !== item);
  }

  if (max && items.length >= max) {
    return items;
  }

  return [...items, item];
}

function CampaignFlag() {
  return (
    <div className="grid h-9 w-12 place-items-center rounded-lg bg-white shadow-sm ring-1 ring-blue-100">
      <div className="relative h-6 w-8 overflow-hidden rounded-sm bg-white">
        <div className="absolute left-0 top-0 h-4 w-4 rounded-br-sm bg-blue-700" />
        <div className="absolute inset-x-0 top-0 h-1 bg-red-500" />
        <div className="absolute inset-x-0 top-2 h-1 bg-red-500" />
        <div className="absolute inset-x-0 top-4 h-1 bg-red-500" />
        <span className="absolute left-1 top-0.5 text-[7px] font-bold leading-none text-white">
          *
        </span>
      </div>
    </div>
  );
}

function Stepper({
  activeStep,
  setActiveStep,
}: {
  activeStep: number;
  setActiveStep: (step: number) => void;
}) {
  return (
    <nav
      aria-label="Form progress"
      className="mt-8 flex flex-wrap items-center gap-4"
    >
      {steps.map((step, index) => {
        const isActive = activeStep === index;
        const isComplete = activeStep > index;

        return (
          <button
            key={step.title}
            type="button"
            onClick={() => setActiveStep(index)}
            className="group flex min-w-0 items-center gap-3"
            aria-current={isActive ? "step" : undefined}
          >
            <span
              className={cn(
                "grid h-10 w-10 shrink-0 place-items-center rounded-full border text-sm font-semibold transition",
                isActive &&
                  "border-blue-600 bg-blue-600 text-white shadow-[0_10px_24px_rgb(37_99_235/28%)]",
                isComplete && "border-blue-100 bg-blue-100 text-blue-700",
                !isActive &&
                  !isComplete &&
                  "border-slate-200 bg-slate-100 text-slate-600",
              )}
            >
              {isComplete ? <Check className="h-4 w-4" /> : index + 1}
            </span>
            <span className="text-left">
              <span
                className={cn(
                  "block text-sm font-semibold",
                  isActive ? "text-slate-950" : "text-slate-600",
                )}
              >
                {step.title}
              </span>
              <span className="sr-only">{step.eyebrow}</span>
            </span>
            {index < steps.length - 1 ? (
              <span className="hidden h-px w-24 bg-blue-200 md:block" />
            ) : null}
          </button>
        );
      })}
    </nav>
  );
}

function FieldLabel({
  title,
  caption,
  required,
}: {
  title: string;
  caption?: string;
  required?: boolean;
}) {
  return (
    <div className="mb-2">
      <label className="text-sm font-semibold text-slate-950">
        {title}
        {required ? <span className="ml-1 text-red-500">*</span> : null}
      </label>
      {caption ? (
        <p className="mt-1 text-sm text-slate-500">{caption}</p>
      ) : null}
    </div>
  );
}

function Chip({
  children,
  selected,
  onClick,
  className,
}: {
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "min-h-9 rounded-full border px-5 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-200",
        selected
          ? "border-blue-600 bg-blue-600 text-white shadow-[0_8px_18px_rgb(37_99_235/22%)]"
          : "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50",
        className,
      )}
    >
      {children}
    </button>
  );
}

function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "border-b border-slate-200 py-5 first:pt-0 last:border-b-0 last:pb-0",
        className,
      )}
    >
      {children}
    </section>
  );
}

function SidePanel({ activeStep }: { activeStep: number }) {
  const panel = nextPanels[activeStep];

  return (
    <aside className="rounded-lg border border-blue-100 bg-blue-50/70 p-8 shadow-[0_18px_48px_rgb(37_99_235/10%)]">
      <div className="grid h-14 w-14 place-items-center rounded-full bg-blue-100 text-blue-600">
        <Sparkles className="h-7 w-7" />
      </div>
      <h2 className="mt-6 text-2xl font-bold text-slate-950">
        {panel.title}
      </h2>
      <p className="mt-3 text-base leading-7 text-slate-600">{panel.copy}</p>
      <div className="mt-8 space-y-7">
        {panel.items.map(([title, copy, Icon]) => (
          <div key={title as string} className="grid grid-cols-[48px_1fr] gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-blue-100 text-blue-600">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-950">
                {title as string}
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                {copy as string}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-9 border-t border-blue-200 pt-7">
        <div className="flex items-start gap-4">
          <CampaignFlag />
          <p className="pt-1 text-sm italic leading-6 text-slate-600">
            "{panel.quote}"
          </p>
        </div>
      </div>
    </aside>
  );
}

function BasicInfoScreen({
  office,
  setOffice,
  party,
  setParty,
}: {
  office: string;
  setOffice: (office: string) => void;
  party: string;
  setParty: (party: string) => void;
}) {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold text-slate-950">
          Let's start with the basics
        </h2>
        <p className="mt-1 text-base text-slate-600">
          Tell us about yourself and your campaign.
        </p>
      </div>

      <Section>
        <FieldLabel title="Candidate name" required />
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm text-slate-600">
              First Name
            </label>
            <Input placeholder="Enter your first name" className="h-10 bg-white" />
          </div>
          <div>
            <label className="mb-1 block text-sm text-slate-600">
              Last Name
            </label>
            <Input placeholder="Enter your last name" className="h-10 bg-white" />
          </div>
        </div>
      </Section>

      <Section>
        <FieldLabel title="What office are you running for?" required />
        <div className="flex flex-wrap gap-3">
          {offices.map((item) => (
            <Chip
              key={item}
              selected={office === item}
              onClick={() => setOffice(item)}
            >
              {item}
            </Chip>
          ))}
        </div>
      </Section>

      <Section>
        <FieldLabel title="Where are you running?" required />
        <div className="grid gap-5 md:grid-cols-3">
          {["State", "City", "District"].map((label) => (
            <div key={label}>
              <label className="mb-1 block text-sm text-slate-600">
                {label}
              </label>
              <div className="relative">
                <select className="h-10 w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 pr-9 text-sm text-slate-500 outline-none transition focus:border-blue-500 focus:ring-3 focus:ring-blue-100">
                  <option>Select a {label.toLowerCase()}</option>
                  <option>California</option>
                  <option>Texas</option>
                  <option>New York</option>
                  <option>Springfield</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <FieldLabel title="Election year" required />
        <div className="relative max-w-xs">
          <select className="h-10 w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 pr-9 text-sm text-slate-500 outline-none transition focus:border-blue-500 focus:ring-3 focus:ring-blue-100">
            <option>Select a year</option>
            {years.map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
        </div>
      </Section>

      <Section>
        <FieldLabel title="Political affiliation" required />
        <div className="flex flex-wrap gap-3">
          {parties.map((item) => (
            <Chip
              key={item}
              selected={party === item}
              onClick={() => setParty(item)}
            >
              {item}
            </Chip>
          ))}
        </div>
      </Section>

      <Section>
        <FieldLabel
          title="Why are you running?"
          caption="Briefly describe your motivation and campaign mission."
          required
        />
        <div className="relative">
          <Textarea
            maxLength={500}
            placeholder="Share what inspires you and the change you want to make..."
            className="min-h-20 resize-none bg-white pr-16"
          />
          <span className="absolute bottom-3 right-3 text-xs text-slate-500">
            0/500
          </span>
        </div>
      </Section>
    </>
  );
}

function CampaignSetupScreen({
  office,
  selectedIssues,
  setSelectedIssues,
  primaryAction,
  setPrimaryAction,
  secondaryActions,
  setSecondaryActions,
  tone,
  setTone,
}: {
  office: string;
  selectedIssues: string[];
  setSelectedIssues: (issues: string[]) => void;
  primaryAction: string;
  setPrimaryAction: (action: string) => void;
  secondaryActions: string[];
  setSecondaryActions: (actions: string[]) => void;
  tone: string;
  setTone: (tone: string) => void;
}) {
  const issueOptions = useMemo(() => {
    if (office === "Governor") return governorIssues;
    if (office === "Mayor") return mayorIssues;
    return localIssues;
  }, [office]);

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold text-slate-950">
          Set up your campaign
        </h2>
        <p className="mt-1 text-base text-slate-600">
          Choose the priorities and actions that shape your website.
        </p>
      </div>

      <Section>
        <FieldLabel
          title="What should supporters do?"
          caption="Select one primary action and any additional actions."
          required
        />
        <div className="flex flex-wrap gap-3">
          {primaryActions.map((item) => (
            <Chip
              key={item}
              selected={primaryAction === item}
              onClick={() => setPrimaryAction(item)}
            >
              {item}
            </Chip>
          ))}
        </div>
        <p className="mb-2 mt-5 text-sm font-semibold text-slate-600">
          Additional actions (optional)
        </p>
        <div className="flex flex-wrap gap-3">
          {additionalActions.map((item) => (
            <Chip
              key={item}
              selected={secondaryActions.includes(item)}
              onClick={() =>
                setSecondaryActions(toggleItem(secondaryActions, item))
              }
              className="min-h-8 px-4 py-1.5 text-xs"
            >
              {item}
            </Chip>
          ))}
        </div>
      </Section>

      <Section>
        <FieldLabel
          title="Primary campaign issues"
          caption="Choose up to 5 issues to highlight on your website."
          required
        />
        <div className="flex flex-wrap gap-3">
          {issueOptions.map((item) => (
            <Chip
              key={item}
              selected={selectedIssues.includes(item)}
              onClick={() =>
                setSelectedIssues(toggleItem(selectedIssues, item, 5))
              }
            >
              {item}
            </Chip>
          ))}
        </div>
        {selectedIssues.length ? (
          <div className="mt-5 rounded-lg border border-blue-100 bg-blue-50 p-4">
            <p className="text-sm font-semibold text-slate-950">
              Add position notes for selected issues
            </p>
            <div className="mt-3 grid gap-3">
              {selectedIssues.map((issue) => (
                <div
                  key={issue}
                  className="grid gap-2 md:grid-cols-[180px_1fr_auto] md:items-center"
                >
                  <span className="text-sm font-medium text-slate-700">
                    {issue}
                  </span>
                  <Input
                    placeholder="Briefly describe your policy or upload an existing policy"
                    className="h-9 bg-white"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="h-9 bg-white"
                  >
                    <UploadCloud className="h-4 w-4" />
                    Upload
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </Section>

      <Section>
        <FieldLabel title="Do you already have a campaign slogan?" required />
        <div className="flex flex-wrap gap-6 text-sm text-slate-700">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="slogan-mode"
              className="h-5 w-5 accent-blue-600"
            />
            Yes, I'll enter it
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="slogan-mode"
              defaultChecked
              className="h-5 w-5 accent-blue-600"
            />
            Help me generate one
          </label>
        </div>
        <div className="mt-4 rounded-lg border border-blue-100 bg-blue-50 p-4">
          <p className="mb-3 text-sm font-semibold text-slate-950">
            Suggested slogan ideas
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            {sloganIdeas.map((idea) => (
              <label
                key={idea}
                className="flex min-h-11 items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-600"
              >
                <input
                  type="radio"
                  name="slogan-idea"
                  className="h-5 w-5 accent-blue-600"
                />
                {idea}
              </label>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <FieldLabel
          title="Campaign tone"
          caption="Choose the style for your website messaging."
          required
        />
        <div className="flex flex-wrap gap-3">
          {toneOptions.map((item) => (
            <Chip key={item} selected={tone === item} onClick={() => setTone(item)}>
              {item}
            </Chip>
          ))}
        </div>
      </Section>
    </>
  );
}

function AssetsScreen({
  bioFacts,
  setBioFacts,
  designStyle,
  setDesignStyle,
}: {
  bioFacts: string[];
  setBioFacts: (facts: string[]) => void;
  designStyle: string;
  setDesignStyle: (style: string) => void;
}) {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold text-slate-950">
          Bring your campaign to life
        </h2>
        <p className="mt-1 text-base text-slate-600">
          Add your photos, bio, logo, and choose a design style.
        </p>
      </div>

      <Section>
        <FieldLabel
          title="Candidate photo"
          caption="Upload a professional photo of yourself. This will be featured on your website."
          required
        />
        <div className="grid gap-5 lg:grid-cols-[1fr_220px]">
          <label className="grid min-h-40 cursor-pointer place-items-center rounded-lg border border-dashed border-blue-200 bg-blue-50/40 p-6 text-center transition hover:border-blue-500 hover:bg-blue-50">
            <input type="file" accept="image/*" className="sr-only" />
            <span>
              <UploadCloud className="mx-auto mb-3 h-8 w-8 text-blue-600" />
              <span className="block text-base font-semibold text-slate-950">
                Drag and drop your photo here
              </span>
              <span className="mt-1 block text-sm text-blue-600">
                or click to browse
              </span>
              <span className="mt-2 block text-xs text-slate-500">
                JPG, PNG or WebP · Max 5MB
              </span>
            </span>
          </label>
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
            <div className="h-full min-h-40 bg-[linear-gradient(135deg,#dbeafe_0%,#ffffff_45%,#fee2e2_100%)] p-5">
              <div className="flex h-full flex-col justify-end rounded-lg bg-white/60 p-4">
                <div className="h-16 w-16 rounded-full bg-slate-200 ring-4 ring-white" />
                <p className="mt-3 text-sm font-bold text-slate-950">
                  Photo preview
                </p>
                <p className="text-xs text-slate-500">Shown after upload</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <FieldLabel
          title="Candidate bio facts"
          caption="Choose the background details your site should highlight."
          required
        />
        <div className="grid gap-3 md:grid-cols-2">
          {bioOptions.map((item) => (
            <label
              key={item}
              className={cn(
                "flex min-h-11 items-center gap-3 rounded-lg border px-4 py-2 text-sm transition",
                bioFacts.includes(item)
                  ? "border-blue-600 bg-blue-50 text-blue-700"
                  : "border-slate-200 bg-white text-slate-700",
              )}
            >
              <input
                type="checkbox"
                checked={bioFacts.includes(item)}
                onChange={() => setBioFacts(toggleItem(bioFacts, item))}
                className="h-5 w-5 accent-blue-600"
              />
              {item}
            </label>
          ))}
        </div>
        {bioFacts.length ? (
          <div className="mt-5 grid gap-4 rounded-lg border border-blue-100 bg-blue-50 p-4 md:grid-cols-2">
            {[
              "Current / Previous Position",
              "Years of Experience",
              "Education",
              "Key Accomplishments",
            ].map((item) => (
              <div key={item}>
                <label className="mb-1 block text-sm font-semibold text-slate-700">
                  {item}
                </label>
                <Input placeholder="Add details" className="h-9 bg-white" />
              </div>
            ))}
            <div className="md:col-span-2">
              <label className="mb-1 block text-sm font-semibold text-slate-700">
                Personal Story
              </label>
              <Textarea
                placeholder="Share a short story the campaign website can use..."
                className="min-h-20 bg-white"
              />
            </div>
          </div>
        ) : null}
      </Section>

      <Section>
        <FieldLabel
          title="Add additional assets"
          caption="Include any other materials you'd like to feature on your website."
        />
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {assetCards.map(({ title, subtitle, action, icon: Icon }) => (
            <div
              key={title}
              className="rounded-lg border border-slate-200 bg-white p-4 text-center"
            >
              <Icon className="mx-auto h-7 w-7 text-blue-600" />
              <h3 className="mt-3 text-sm font-bold text-slate-950">
                {title}
              </h3>
              <p className="mt-1 min-h-8 text-xs leading-4 text-slate-500">
                {subtitle}
              </p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-3 w-full bg-white text-blue-600"
              >
                {action}
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <FieldLabel
          title="Choose a design style"
          caption="Select a visual style for your website. You can always change this later."
          required
        />
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {designStyles.map((style) => (
            <button
              key={style.title}
              type="button"
              onClick={() => setDesignStyle(style.title)}
              className={cn(
                "grid min-h-20 grid-cols-[104px_1fr] items-center gap-4 rounded-lg border bg-white p-2 text-left transition focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-200",
                designStyle === style.title
                  ? "border-blue-600 ring-2 ring-blue-100"
                  : "border-slate-200 hover:border-blue-200",
              )}
            >
              <span
                className={cn("h-16 rounded-lg bg-gradient-to-br", style.palette)}
              />
              <span className="flex items-center gap-3">
                <span
                  className={cn(
                    "grid h-5 w-5 place-items-center rounded-full border",
                    designStyle === style.title
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-slate-300",
                  )}
                >
                  {designStyle === style.title ? (
                    <Check className="h-3 w-3" />
                  ) : null}
                </span>
                <span>
                  <span className="block text-sm font-bold text-slate-950">
                    {style.title}
                  </span>
                  <span className="mt-1 block text-xs text-slate-500">
                    {style.subtitle}
                  </span>
                </span>
              </span>
            </button>
          ))}
        </div>
      </Section>
    </>
  );
}

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const [office, setOffice] = useState("Governor");
  const [party, setParty] = useState("Independent");
  const [selectedIssues, setSelectedIssues] = useState([
    "Public Safety",
    "Housing & Affordability",
    "Small Business",
  ]);
  const [primaryAction, setPrimaryAction] = useState("Donate");
  const [secondaryActions, setSecondaryActions] = useState([
    "Volunteer",
    "Register to Vote",
  ]);
  const [tone, setTone] = useState("Leadership");
  const [bioFacts, setBioFacts] = useState([
    "Community organizer",
    "Lifelong local resident",
  ]);
  const [designStyle, setDesignStyle] = useState("Modern");

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#eff6ff_0,#f8fbff_36%,#ffffff_70%)] text-slate-950">
      <header className="border-b border-slate-200 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <CampaignFlag />
            <span className="text-lg font-bold text-slate-950">
              Campaign Website Agent
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-600">
            <span className="hidden items-center gap-2 sm:flex">
              <CircleHelp className="h-4 w-4" />
              Need help?
            </span>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full bg-blue-100 font-bold text-blue-700"
            >
              JD
            </button>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-10">
        <div>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl">
            Create Your Campaign Website
          </h1>
          <p className="mt-2 text-lg text-slate-600 md:text-xl">
            Answer a few questions to generate your first campaign site.
          </p>
        </div>

        <Stepper activeStep={activeStep} setActiveStep={setActiveStep} />

        <div className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgb(15_23_42/7%)] md:p-8">
            {activeStep === 0 ? (
              <BasicInfoScreen
                office={office}
                setOffice={setOffice}
                party={party}
                setParty={setParty}
              />
            ) : null}
            {activeStep === 1 ? (
              <CampaignSetupScreen
                office={office}
                selectedIssues={selectedIssues}
                setSelectedIssues={setSelectedIssues}
                primaryAction={primaryAction}
                setPrimaryAction={setPrimaryAction}
                secondaryActions={secondaryActions}
                setSecondaryActions={setSecondaryActions}
                tone={tone}
                setTone={setTone}
              />
            ) : null}
            {activeStep === 2 ? (
              <AssetsScreen
                bioFacts={bioFacts}
                setBioFacts={setBioFacts}
                designStyle={designStyle}
                setDesignStyle={setDesignStyle}
              />
            ) : null}

            <div className="mt-8 flex flex-wrap items-center justify-end gap-3 border-t border-slate-200 pt-5">
              {activeStep > 0 ? (
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="h-11 min-w-28 bg-white"
                  onClick={() => setActiveStep(activeStep - 1)}
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>
              ) : null}
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="h-11 min-w-32 bg-white"
              >
                Save draft
              </Button>
              <Button
                type="button"
                size="lg"
                className="h-11 min-w-40 bg-blue-600 text-white hover:bg-blue-700"
                onClick={() => setActiveStep(Math.min(activeStep + 1, 2))}
              >
                {activeStep === 2 ? "Continue to Review" : "Continue"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <SidePanel activeStep={activeStep} />
        </div>
      </div>
    </main>
  );
}
