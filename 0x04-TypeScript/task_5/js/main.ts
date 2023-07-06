// MajorCredits interface
interface MajorCredits {
    readonly brand: unique symbol;
    credits: number;
}

// MinorCredits interface
interface MinorCredits {
    readonly brand: unique symbol;
    credits: number;
}

// sumMajorCredits function
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        brand: Symbol(),
        credits: subject1.credits + subject2.credits
    };
}

// sumMinorCredits function
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        brand: Symbol(),
        credits: subject1.credits + subject2.credits
    };
}

export { MajorCredits, MinorCredits, sumMajorCredits, sumMinorCredits };
