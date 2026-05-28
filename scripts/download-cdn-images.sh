#!/usr/bin/env bash
# One-time fetch of Webflow CDN assets into public/images/.
# Format per line: URL|relative-path-under-public/
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PUBLIC="$ROOT/public"

manifest() {
  cat <<'EOF'
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/69321d8f305635d733809f43_Logo%20V3.png|images/logo.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/61dc9476de20fee46b908c56_Group%203766.png|images/case-studies/expert-scheduling/hero-group-3766.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/6849d1c8f215334c1dbe8850_image%20293.png|images/case-studies/expert-scheduling/journey-image-293.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/685c69fcd3e7d190e1cc64b7_Group%20632525.png|images/case-studies/expert-scheduling/group-632525.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/6831216ed0e2d6b0a03e0034_1.jpg|images/case-studies/expert-scheduling/01.jpg
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/6831216f5cdf024d95c73309_2.jpg|images/case-studies/expert-scheduling/02.jpg
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/6831216fcb26781c3b1f456f_3.jpg|images/case-studies/expert-scheduling/03.jpg
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/6831216fa511c087c37be18b_4.jpg|images/case-studies/expert-scheduling/04.jpg
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/684270edaa3779ba22dffa79_Error%20message%20mockup.png|images/case-studies/expert-scheduling/error-message-mockup.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/6831217011c7f20effc31522_6.jpg|images/case-studies/expert-scheduling/06.jpg
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/6831216f781e6d4d23cda26d_7.jpg|images/case-studies/expert-scheduling/07.jpg
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/6831216fd0e2d6b0a03e0078_8.jpg|images/case-studies/expert-scheduling/08.jpg
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/683121705ac228a8e8197fd6_10.jpg|images/case-studies/expert-scheduling/10.jpg
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/6831217081fbd522db08325c_9.jpg|images/case-studies/expert-scheduling/09.jpg
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/687ecc3ab43fdbb1c4c6cbf8_Laptop.png|images/case-studies/conversion-goal-updates/laptop.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/687ecc4d17cc67389db35e74_CGU%202.png|images/case-studies/conversion-goal-updates/cgu-2.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/687ecc56cfebde2e6c840aa2_CGU%203.png|images/case-studies/conversion-goal-updates/cgu-3.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/687ecc65b6baa5dc9999e6c5_CGU%204.png|images/case-studies/conversion-goal-updates/cgu-4.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/687ecd1eff1cf83b0eef755a_CGU%205.png|images/case-studies/conversion-goal-updates/cgu-5.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/687ecd0fb43fdbb1c4c70194_CGU%206.png|images/case-studies/conversion-goal-updates/cgu-6.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/687ece43c2cd6050d290c412_CGU%20hero.png|images/case-studies/conversion-goal-updates/cgu-hero.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/687ecd58b43fdbb1c4c7213c_CGU%207.png|images/case-studies/conversion-goal-updates/cgu-7.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/687ecd61e0440486c617b8e5_CGU%208.png|images/case-studies/conversion-goal-updates/cgu-8.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/688181680e5f8491648c19c1_Variant4.png|images/case-studies/flexible-lift-confidence/variant-4.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/6881844e3a9d10b784a2a349_Group%20632545.png|images/case-studies/flexible-lift-confidence/group-632545.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/688143b094c3af844ffe3765_Screenshot%202025-07-22%20at%2017.31.15.png|images/case-studies/flexible-lift-confidence/screenshot-2025-07-22.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/68818476617985a84c13098b_Group%20632560.png|images/case-studies/flexible-lift-confidence/group-632560.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/688184bc30b0f8ce8074082f_Group%20130.png|images/case-studies/flexible-lift-confidence/group-130.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/688184c03a9d10b784a2cbef_Group%20131.png|images/case-studies/flexible-lift-confidence/group-131.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/689630b9f0bf361d7890dbae_Frame%20632571.png|images/case-studies/flexible-lift-confidence/frame-632571.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/68818aa94a83be540f37746d_Group%20632542.png|images/case-studies/flexible-lift-confidence/group-632542.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/6881851135f6c4b57b87c444_Group%20632550.png|images/case-studies/flexible-lift-confidence/group-632550.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/68818accbf7f140bd554d796_Group%20632544.png|images/case-studies/flexible-lift-confidence/group-632544.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/687ee8002c3363fa68d1a9cd_CM%201.png|images/case-studies/measurement-setup/cm-1.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/687ee80e2c3363fa68d1ab3b_CM%202.png|images/case-studies/measurement-setup/cm-2.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/687ee81831b71e66d3b8bf34_CM%203.png|images/case-studies/measurement-setup/cm-3.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/687ee873047c37afced10318_Group%20632552.png|images/case-studies/measurement-setup/group-632552.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/687ee88110cc3a37269c4409_CM%205.png|images/case-studies/measurement-setup/cm-5.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/687ee8902d8b5cac4b72383a_CM%206.png|images/case-studies/measurement-setup/cm-6.png
https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/687ee899bef18141e0c9daca_CM%207.png|images/case-studies/measurement-setup/cm-7.png
EOF
}

download_manifest() {
  local line url dest dest_dir
  while IFS='|' read -r url dest; do
    [[ -z "$url" ]] && continue
    dest_dir="$(dirname "$PUBLIC/$dest")"
    mkdir -p "$dest_dir"
    echo "→ $dest"
    curl -fsSL "$url" -o "$PUBLIC/$dest"
  done
}

echo "Downloading Webflow CDN assets into $PUBLIC ..."
manifest | download_manifest
echo "Done. $(manifest | wc -l | tr -d ' ') files."
