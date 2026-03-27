// #popclip
// name: My 5 Shortcuts
// identifier: com.custom.shortcuts.popclip
// description: 5 konfigurowalnych skrótów z wybieralnymi ikonami. W opcjach ustaw skrót i ikonę dla każdego przycisku.
// popclip version: 3785
// entitlements: [dynamic]

const ICON_CHOICES = [
  // —— Cyfry ——
  { value: "circle filled 1", label: "①" },
  { value: "circle filled 2", label: "②" },
  { value: "circle filled 3", label: "③" },
  { value: "circle filled 4", label: "④" },
  { value: "circle filled 5", label: "⑤" },
  { value: "square filled 1", label: "1□" },
  { value: "square filled 2", label: "2□" },
  { value: "square filled 3", label: "3□" },
  { value: "square filled 4", label: "4□" },
  { value: "square filled 5", label: "5□" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  // —— Schowek, kopiuj, wklej, wytnij ——
  { value: "symbol:doc.on.doc", label: "📋 Kopiuj" },
  { value: "symbol:doc.on.clipboard", label: "📄 Schowek" },
  { value: "symbol:doc.on.clipboard.fill", label: "📄 Schowek (wypełniony)" },
  { value: "symbol:scissors", label: "✂️ Nożyczki (wytnij)" },
  { value: "symbol:square.and.arrow.down", label: "⬇️ Wklej / Pobierz" },
  { value: "symbol:square.and.arrow.up", label: "⬆️ Udostępnij / Wyślij" },
  { value: "symbol:arrow.2.squarepath", label: "↔️ Duplikuj" },
  { value: "symbol:clipboard", label: "📑 Schowek" },
  // —— Edycja, formatowanie ——
  { value: "symbol:bold", label: "B Pogrubienie" },
  { value: "symbol:italic", label: "I Kursywa" },
  { value: "symbol:underline", label: "U Podkreślenie" },
  { value: "symbol:strikethrough", label: "S Przekreślenie" },
  { value: "symbol:pencil", label: "✏️ Ołówek (edytuj)" },
  { value: "symbol:pencil.circle.fill", label: "✏️ Ołówek w kółku" },
  { value: "symbol:highlighter", label: "🖍 Zaznaczacz" },
  { value: "symbol:paintbrush", label: "🖌 Pędzel" },
  { value: "symbol:trash", label: "🗑 Kosz" },
  { value: "symbol:trash.fill", label: "🗑 Kosz (wypełniony)" },
  // —— Dokumenty, pliki ——
  { value: "symbol:doc", label: "📄 Dokument" },
  { value: "symbol:doc.fill", label: "📄 Dokument (wypełniony)" },
  { value: "symbol:folder", label: "📁 Folder" },
  { value: "symbol:folder.fill", label: "📁 Folder (wypełniony)" },
  { value: "symbol:paperclip", label: "📎 Spinacz" },
  { value: "symbol:link", label: "🔗 Link" },
  { value: "symbol:bookmark", label: "🔖 Zakładka" },
  { value: "symbol:bookmark.fill", label: "🔖 Zakładka (wypełniona)" },
  // —— Szukaj, powiększ ——
  { value: "symbol:magnifyingglass", label: "🔍 Lupa" },
  { value: "symbol:magnifyingglass.circle", label: "🔍 Lupa w kółku" },
  { value: "symbol:plus.magnifyingglass", label: "🔍+ Powiększ" },
  { value: "symbol:minus.magnifyingglass", label: "🔍− Pomniejsz" },
  // —— Strzałki, akcje ——
  { value: "symbol:checkmark", label: "✓ Zaznacz" },
  { value: "symbol:checkmark.circle.fill", label: "✓ Kółko z ptaszkiem" },
  { value: "symbol:xmark", label: "✕ Anuluj" },
  { value: "symbol:xmark.circle.fill", label: "✕ Kółko z X" },
  { value: "symbol:plus", label: "+ Plus" },
  { value: "symbol:plus.circle.fill", label: "+ Plus w kółku" },
  { value: "symbol:minus", label: "− Minus" },
  { value: "symbol:minus.circle.fill", label: "− Minus w kółku" },
  { value: "symbol:arrow.up", label: "↑ W górę" },
  { value: "symbol:arrow.down", label: "↓ W dół" },
  { value: "symbol:arrow.left", label: "← W lewo" },
  { value: "symbol:arrow.right", label: "→ W prawo" },
  { value: "symbol:arrow.clockwise", label: "↻ Odśwież" },
  { value: "symbol:arrow.counterclockwise", label: "↺ Cofnij" },
  // —— Komunikacja, media ——
  { value: "symbol:envelope", label: "✉️ E-mail" },
  { value: "symbol:envelope.fill", label: "✉️ E-mail (wypełniony)" },
  { value: "symbol:message", label: "💬 Wiadomość" },
  { value: "symbol:message.fill", label: "💬 Wiadomość (wypełniona)" },
  { value: "symbol:phone", label: "📞 Telefon" },
  { value: "symbol:phone.fill", label: "📞 Telefon (wypełniony)" },
  { value: "symbol:camera", label: "📷 Aparat" },
  { value: "symbol:photo", label: "🖼 Zdjęcie" },
  { value: "symbol:photo.fill", label: "🖼 Zdjęcie (wypełnione)" },
  // —— Ulubione, oceny ——
  { value: "symbol:star", label: "☆ Gwiazdka" },
  { value: "symbol:star.fill", label: "★ Gwiazdka (wypełniona)" },
  { value: "symbol:heart", label: "♡ Serce" },
  { value: "symbol:heart.fill", label: "♥ Serce (wypełnione)" },
  { value: "symbol:flag", label: "🚩 Flaga" },
  { value: "symbol:flag.fill", label: "🚩 Flaga (wypełniona)" },
  // —— Klawiatura, system ——
  { value: "symbol:command", label: "⌘ Command" },
  { value: "symbol:keyboard", label: "⌨ Klawiatura" },
  { value: "symbol:bolt.fill", label: "⚡ Błyskawica" },
  { value: "symbol:gearshape", label: "⚙ Ustawienia" },
  { value: "symbol:gearshape.fill", label: "⚙ Ustawienia (wypełnione)" },
  { value: "symbol:lock", label: "🔒 Kłódka" },
  { value: "symbol:lock.fill", label: "🔒 Kłódka (wypełniona)" },
  { value: "symbol:person", label: "👤 Osoba" },
  { value: "symbol:person.fill", label: "👤 Osoba (wypełniona)" },
  // —— Tekst, lista ——
  { value: "symbol:list.bullet", label: "• Lista punktowana" },
  { value: "symbol:list.number", label: "1. Lista numerowana" },
  { value: "symbol:textformat", label: "Aa Format tekstu" },
  { value: "symbol:quote.closing", label: "„ Cudzysłów" },
  { value: "symbol:tag", label: "🏷 Tag" },
  { value: "symbol:tag.fill", label: "🏷 Tag (wypełniony)" },
  // —— Mówienie, głos, rozmowa ——
  { value: "symbol:bubble.left.fill", label: "💬 Dymek (mówienie)" },
  { value: "symbol:bubble.right.fill", label: "💬 Dymek prawy" },
  { value: "symbol:bubble.left.and.bubble.right.fill", label: "💬 Rozmowa (dwa dymki)" },
  { value: "symbol:person.wave.2.fill", label: "👋 Postać machająca" },
  { value: "symbol:person.crop.circle.badge.mic", label: "🎤 Postać z mikrofonem" },
  { value: "symbol:speaker.wave.2.fill", label: "🔊 Głośnik" },
  { value: "symbol:mic.fill", label: "🎤 Mikrofon" },
  { value: "symbol:mic.slash.fill", label: "🔇 Mikrofon wyciszony" },
  { value: "symbol:hand.raised.fill", label: "✋ Ręka w górę" },
  // —— Zrzut ekranu, nagrywanie ekranu ——
  { value: "symbol:viewfinder", label: "📷 Celownik (zrzut ekranu)" },
  { value: "symbol:camera.viewfinder", label: "📷 Zrzut ekranu" },
  { value: "symbol:rectangle.dashed.badge.record", label: "⏺ Prostokąt + nagrywanie" },
  { value: "symbol:rectangle.on.rectangle.angled", label: "🖼 Zrzut / warstwy" },
  { value: "symbol:record.circle", label: "⏺ Nagrywaj (kółko)" },
  { value: "symbol:record.circle.fill", label: "⏺ Nagrywaj (wypełnione)" },
  { value: "symbol:video.fill", label: "🎬 Nagrywanie wideo" },
  { value: "symbol:video.badge.plus", label: "🎬 Wideo + (nowe)" },
  { value: "symbol:video.slash", label: "🎬 Wideo wyłączone" },
  { value: "symbol:tv", label: "📺 Ekran / TV" },
  { value: "symbol:tv.fill", label: "📺 Ekran (wypełniony)" },
  // —— OCR, skan tekstu ——
  { value: "symbol:doc.text.viewfinder", label: "📄 OCR / Skan tekstu" },
  { value: "symbol:text.viewfinder", label: "🔤 Rozpoznawanie tekstu" },
  { value: "symbol:character.textbox", label: "Aa Tekst w ramce" },
  { value: "symbol:doc.richtext", label: "📝 Dokument z formatowaniem" },
  { value: "symbol:doc.plaintext", label: "📄 Tekst prosty" },
];

function optionIcon(n) {
  return {
    identifier: `icon${n}`,
    type: "multiple",
    label: `Ikona ${n}`,
    "default value": `circle filled ${n}`,
    values: ICON_CHOICES.map((c) => c.value),
    "value labels": ICON_CHOICES.map((c) => c.label),
  };
}

function optionShortcut(n) {
  const desc =
    n === 1
      ? "Np. command b, option shift x (modifikatory: command, option, control, shift)"
      : "Format jak wyżej";
  return {
    identifier: `shortcut${n}`,
    type: "string",
    label: `Skrót ${n}`,
    "default value": `command ${n}`,
    description: desc,
  };
}

const shortcutOptions = [1, 2, 3, 4, 5].flatMap((n) => [
  optionShortcut(n),
  optionIcon(n),
]);

exports["options title"] = "Skróty i ikony";
exports.options = shortcutOptions;

exports.actions = (input, options) => {
  const actions = [];
  for (let n = 1; n <= 5; n++) {
    const shortcutKey = `shortcut${n}`;
    const iconKey = `icon${n}`;
    const combo = String(options[shortcutKey] || "").trim();
    const icon = options[iconKey] || `circle filled ${n}`;
    actions.push({
      identifier: String(n),
      title: `Skrót ${n}`,
      icon: icon,
      code: () => {
        if (!combo) {
          throw new Error(`Settings error: Ustaw Skrót ${n} w opcjach.`);
        }
        popclip.pressKey(combo);
      },
    });
  }
  return actions;
};
