class Transcriptor {
    private DNATORNA: Map<string, string> = new Map({
        ['C', 'G'],
        ['G', 'C'],
        ['T', 'A'],
        ['A', 'U'],
    });
    toRna(nucleotide: string): string {
        let ret: string[] = [];
        try {
            ret = nucleotide.split('').map(x => this.fetchTranslation(x)) 
        } catch (e) {
            if (e instanceof TypeError) throw e;
        }
        return ret.join('');
    }

    private fetchTranslation(nucleotide: string): string {
        const returnable: string|undefined = this.DNATORNA.get(nucleotide);
        if (returnable === undefined) throw new TypeError('Invalid input DNA.');
        return returnable;
    }
}

export default Transcriptor