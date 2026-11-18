// Copied from the app repo (gym-navigator-front-app/src/constants/legal.ts) — keep the two in sync.

export const SUPPORT_EMAIL = 'support@gymify.pk';
export const LEGAL_UPDATED = 'November 18, 2026';

export type LegalDoc = 'privacy' | 'terms' | 'health';

export interface LegalSection {
  heading: string;
  body: string[];
}

export const LEGAL_TITLES: Record<LegalDoc, string> = {
  privacy: 'Privacy policy',
  terms: 'Terms of use',
  health: 'Health disclaimer',
};

export const HEALTH_DISCLAIMER =
  'Gymify gives general fitness guidance, not medical advice. Talk to a doctor before starting a new exercise or diet plan — especially if you are pregnant, have a heart condition, high blood pressure, diabetes, an injury or any other medical condition. Stop exercising and get help if you feel pain, dizziness, chest tightness or shortness of breath.';

export const LEGAL: Record<LegalDoc, LegalSection[]> = {
  privacy: [
    {
      heading: 'Who we are',
      body: [
        `Gymify ("we", "us") is a workout planning app. This policy explains what we collect, why, and the choices you have. Questions: ${SUPPORT_EMAIL}.`,
      ],
    },
    {
      heading: 'What we collect',
      body: [
        'Account: your name, email address and password (stored only as a secure hash — we can never see it).',
        'Profile and health data you enter: body weight, height, age, sex, goal, activity level, injuries, weight check-ins and body measurements (waist, chest, arm, hips, thigh).',
        'Training data: the equipment in your gym, generated workouts, the sets, reps and weights you log, and your weekly plan.',
        'Steps: your daily step count from your phone\'s motion sensor, used to adjust your calorie budget. Steps are counted on your phone; only the daily total is sent to us.',
        'App usage: when you open the app, how long you use it and which screens you visit (screen names only, never what you type on them), counted per day. We use it to see which parts help and to improve the app.',
        'Gym photos: if you use "Scan your gym", the photo is sent to our AI provider to detect equipment. We do not store the photo.',
        'Progress photos: saved only on your phone, inside the app. They are never uploaded to us, and deleting the app or your account removes them.',
        'Walks and runs: if you track one, the app uses your phone\'s location (only while tracking, with a notification showing) to draw the route. The route is saved only on your phone and never sent to us. Only the summary (date, kind, minutes, distance and effort) is sent, as cardio in your workout log, for outings of 10 minutes or more.',
        'We do not collect your location, contacts, or advertising identifiers, and the app has no ads.',
      ],
    },
    {
      heading: 'How we use it',
      body: [
        'To build your workouts, track progress, calculate calorie and macro targets, keep streaks, and make your weekly report.',
        'To let you reset your password (we email you a one-time code).',
        'To keep the service secure and fix problems.',
        'We never sell your data and never use it for advertising.',
      ],
    },
    {
      heading: 'Who can see your data',
      body: [
        'Your coach: if you link to a trainer with their code, they can see your profile, workouts, progress and plan, and can set your weekly plan. You can unlink your coach at any time in the app.',
        'Your gym: if you join a gym, other members see your name, trained days and streak on the gym leaderboard. You can leave the gym at any time.',
        'Service providers that run the app for us: Render (API hosting), Supabase (database), Anthropic (AI gym photo scan) and our email provider (password reset emails). They process data only to provide their service to us.',
        'Authorities, only when the law requires it.',
      ],
    },
    {
      heading: 'Storage and security',
      body: [
        'Data is stored on secure servers that may be outside your country. Connections are encrypted (HTTPS) and passwords are hashed.',
        'We keep your data while your account exists.',
      ],
    },
    {
      heading: 'Deleting your data',
      body: [
        'You can delete your account at any time in the app: Menu → Account & privacy → Delete account. This permanently removes your profile, workouts, logs, plans, check-ins, measurements, steps and app usage straight away, and the progress photos and walk and run routes on that phone.',
        `If you can no longer log in, email ${SUPPORT_EMAIL} from your account email and we will delete it within 30 days.`,
        'We keep nothing after deletion, except that copies in our nightly database backups are removed automatically within 30 days.',
      ],
    },
    {
      heading: 'Children',
      body: ['Gymify is for adults 18 and over. It is not meant for children, and we do not knowingly collect their data.'],
    },
    {
      heading: 'Changes',
      body: ['If we change this policy we will update the date below and, for important changes, tell you in the app.'],
    },
  ],
  terms: [
    {
      heading: 'Using Gymify',
      body: [
        'By creating an account you agree to these terms. You must be at least 18 years old, and you are responsible for keeping your password safe.',
        'Use the app for your own training (or, for coaches, your clients\' training). Do not misuse it, try to break it, or access other people\'s accounts.',
      ],
    },
    {
      heading: 'Not medical advice',
      body: [HEALTH_DISCLAIMER, 'Workouts, calorie targets and macros are estimates generated by software. You train at your own risk: use safe technique, use a spotter for heavy lifts, and choose weights you can control.'],
    },
    {
      heading: 'Coaches',
      body: ['Trainers are independent and are not employed by Gymify. Advice a trainer gives you is their responsibility.'],
    },
    {
      heading: 'Your content',
      body: ['Your data stays yours. You let us store and process it only to run the app for you, as described in the privacy policy.'],
    },
    {
      heading: 'Availability',
      body: [
        'We work to keep the app running but cannot promise it will always be available or error-free. Features may change.',
        'To the extent the law allows, Gymify is not liable for injuries, losses or damages arising from using the app.',
      ],
    },
    {
      heading: 'Ending your account',
      body: ['You can delete your account any time in the app. We may suspend accounts that break these terms.'],
    },
    {
      heading: 'Contact',
      body: [`Questions about these terms: ${SUPPORT_EMAIL}.`],
    },
  ],
  health: [
    {
      heading: 'Please read before training',
      body: [
        HEALTH_DISCLAIMER,
        'Injury filters and warm-ups in Gymify reduce risk but cannot account for every condition. If you have an injury, follow your doctor\'s or physiotherapist\'s advice over the app.',
        'Gymify\'s safety rules (the health check, the limits during pregnancy and after birth, and the settings for adults 65 and over) follow published guidelines: ACSM pre-exercise screening, the WHO 2020 physical activity guidelines and the 2019 Canadian guideline for physical activity in pregnancy. They have not been reviewed by a doctor or physiotherapist.',
        'Calorie and macro targets are estimates from standard formulas. Do not eat below a safe level, and get medical advice before large diet changes.',
      ],
    },
  ],
};
