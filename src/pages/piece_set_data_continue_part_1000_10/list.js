//logs.js
const util = require('../../utils/util.js')

Page({
    data: {
    },
    onLoad: function (options) {
        this.navTime = options.navTime;
        this.onLoadTime = new Date().getTime() - this.navTime;
        console.log('load: '+ this.onLoadTime);
        let dataList = [{"name":"name0000"},{"name":"name0001"},{"name":"name0002"},{"name":"name0003"},{"name":"name0004"},{"name":"name0005"},{"name":"name0006"},{"name":"name0007"},{"name":"name0008"},{"name":"name0009"},{"name":"name0010"},{"name":"name0011"},{"name":"name0012"},{"name":"name0013"},{"name":"name0014"},{"name":"name0015"},{"name":"name0016"},{"name":"name0017"},{"name":"name0018"},{"name":"name0019"},{"name":"name0020"},{"name":"name0021"},{"name":"name0022"},{"name":"name0023"},{"name":"name0024"},{"name":"name0025"},{"name":"name0026"},{"name":"name0027"},{"name":"name0028"},{"name":"name0029"},{"name":"name0030"},{"name":"name0031"},{"name":"name0032"},{"name":"name0033"},{"name":"name0034"},{"name":"name0035"},{"name":"name0036"},{"name":"name0037"},{"name":"name0038"},{"name":"name0039"},{"name":"name0040"},{"name":"name0041"},{"name":"name0042"},{"name":"name0043"},{"name":"name0044"},{"name":"name0045"},{"name":"name0046"},{"name":"name0047"},{"name":"name0048"},{"name":"name0049"},{"name":"name0050"},{"name":"name0051"},{"name":"name0052"},{"name":"name0053"},{"name":"name0054"},{"name":"name0055"},{"name":"name0056"},{"name":"name0057"},{"name":"name0058"},{"name":"name0059"},{"name":"name0060"},{"name":"name0061"},{"name":"name0062"},{"name":"name0063"},{"name":"name0064"},{"name":"name0065"},{"name":"name0066"},{"name":"name0067"},{"name":"name0068"},{"name":"name0069"},{"name":"name0070"},{"name":"name0071"},{"name":"name0072"},{"name":"name0073"},{"name":"name0074"},{"name":"name0075"},{"name":"name0076"},{"name":"name0077"},{"name":"name0078"},{"name":"name0079"},{"name":"name0080"},{"name":"name0081"},{"name":"name0082"},{"name":"name0083"},{"name":"name0084"},{"name":"name0085"},{"name":"name0086"},{"name":"name0087"},{"name":"name0088"},{"name":"name0089"},{"name":"name0090"},{"name":"name0091"},{"name":"name0092"},{"name":"name0093"},{"name":"name0094"},{"name":"name0095"},{"name":"name0096"},{"name":"name0097"},{"name":"name0098"},{"name":"name0099"},{"name":"name0100"},{"name":"name0101"},{"name":"name0102"},{"name":"name0103"},{"name":"name0104"},{"name":"name0105"},{"name":"name0106"},{"name":"name0107"},{"name":"name0108"},{"name":"name0109"},{"name":"name0110"},{"name":"name0111"},{"name":"name0112"},{"name":"name0113"},{"name":"name0114"},{"name":"name0115"},{"name":"name0116"},{"name":"name0117"},{"name":"name0118"},{"name":"name0119"},{"name":"name0120"},{"name":"name0121"},{"name":"name0122"},{"name":"name0123"},{"name":"name0124"},{"name":"name0125"},{"name":"name0126"},{"name":"name0127"},{"name":"name0128"},{"name":"name0129"},{"name":"name0130"},{"name":"name0131"},{"name":"name0132"},{"name":"name0133"},{"name":"name0134"},{"name":"name0135"},{"name":"name0136"},{"name":"name0137"},{"name":"name0138"},{"name":"name0139"},{"name":"name0140"},{"name":"name0141"},{"name":"name0142"},{"name":"name0143"},{"name":"name0144"},{"name":"name0145"},{"name":"name0146"},{"name":"name0147"},{"name":"name0148"},{"name":"name0149"},{"name":"name0150"},{"name":"name0151"},{"name":"name0152"},{"name":"name0153"},{"name":"name0154"},{"name":"name0155"},{"name":"name0156"},{"name":"name0157"},{"name":"name0158"},{"name":"name0159"},{"name":"name0160"},{"name":"name0161"},{"name":"name0162"},{"name":"name0163"},{"name":"name0164"},{"name":"name0165"},{"name":"name0166"},{"name":"name0167"},{"name":"name0168"},{"name":"name0169"},{"name":"name0170"},{"name":"name0171"},{"name":"name0172"},{"name":"name0173"},{"name":"name0174"},{"name":"name0175"},{"name":"name0176"},{"name":"name0177"},{"name":"name0178"},{"name":"name0179"},{"name":"name0180"},{"name":"name0181"},{"name":"name0182"},{"name":"name0183"},{"name":"name0184"},{"name":"name0185"},{"name":"name0186"},{"name":"name0187"},{"name":"name0188"},{"name":"name0189"},{"name":"name0190"},{"name":"name0191"},{"name":"name0192"},{"name":"name0193"},{"name":"name0194"},{"name":"name0195"},{"name":"name0196"},{"name":"name0197"},{"name":"name0198"},{"name":"name0199"},{"name":"name0200"},{"name":"name0201"},{"name":"name0202"},{"name":"name0203"},{"name":"name0204"},{"name":"name0205"},{"name":"name0206"},{"name":"name0207"},{"name":"name0208"},{"name":"name0209"},{"name":"name0210"},{"name":"name0211"},{"name":"name0212"},{"name":"name0213"},{"name":"name0214"},{"name":"name0215"},{"name":"name0216"},{"name":"name0217"},{"name":"name0218"},{"name":"name0219"},{"name":"name0220"},{"name":"name0221"},{"name":"name0222"},{"name":"name0223"},{"name":"name0224"},{"name":"name0225"},{"name":"name0226"},{"name":"name0227"},{"name":"name0228"},{"name":"name0229"},{"name":"name0230"},{"name":"name0231"},{"name":"name0232"},{"name":"name0233"},{"name":"name0234"},{"name":"name0235"},{"name":"name0236"},{"name":"name0237"},{"name":"name0238"},{"name":"name0239"},{"name":"name0240"},{"name":"name0241"},{"name":"name0242"},{"name":"name0243"},{"name":"name0244"},{"name":"name0245"},{"name":"name0246"},{"name":"name0247"},{"name":"name0248"},{"name":"name0249"},{"name":"name0250"},{"name":"name0251"},{"name":"name0252"},{"name":"name0253"},{"name":"name0254"},{"name":"name0255"},{"name":"name0256"},{"name":"name0257"},{"name":"name0258"},{"name":"name0259"},{"name":"name0260"},{"name":"name0261"},{"name":"name0262"},{"name":"name0263"},{"name":"name0264"},{"name":"name0265"},{"name":"name0266"},{"name":"name0267"},{"name":"name0268"},{"name":"name0269"},{"name":"name0270"},{"name":"name0271"},{"name":"name0272"},{"name":"name0273"},{"name":"name0274"},{"name":"name0275"},{"name":"name0276"},{"name":"name0277"},{"name":"name0278"},{"name":"name0279"},{"name":"name0280"},{"name":"name0281"},{"name":"name0282"},{"name":"name0283"},{"name":"name0284"},{"name":"name0285"},{"name":"name0286"},{"name":"name0287"},{"name":"name0288"},{"name":"name0289"},{"name":"name0290"},{"name":"name0291"},{"name":"name0292"},{"name":"name0293"},{"name":"name0294"},{"name":"name0295"},{"name":"name0296"},{"name":"name0297"},{"name":"name0298"},{"name":"name0299"},{"name":"name0300"},{"name":"name0301"},{"name":"name0302"},{"name":"name0303"},{"name":"name0304"},{"name":"name0305"},{"name":"name0306"},{"name":"name0307"},{"name":"name0308"},{"name":"name0309"},{"name":"name0310"},{"name":"name0311"},{"name":"name0312"},{"name":"name0313"},{"name":"name0314"},{"name":"name0315"},{"name":"name0316"},{"name":"name0317"},{"name":"name0318"},{"name":"name0319"},{"name":"name0320"},{"name":"name0321"},{"name":"name0322"},{"name":"name0323"},{"name":"name0324"},{"name":"name0325"},{"name":"name0326"},{"name":"name0327"},{"name":"name0328"},{"name":"name0329"},{"name":"name0330"},{"name":"name0331"},{"name":"name0332"},{"name":"name0333"},{"name":"name0334"},{"name":"name0335"},{"name":"name0336"},{"name":"name0337"},{"name":"name0338"},{"name":"name0339"},{"name":"name0340"},{"name":"name0341"},{"name":"name0342"},{"name":"name0343"},{"name":"name0344"},{"name":"name0345"},{"name":"name0346"},{"name":"name0347"},{"name":"name0348"},{"name":"name0349"},{"name":"name0350"},{"name":"name0351"},{"name":"name0352"},{"name":"name0353"},{"name":"name0354"},{"name":"name0355"},{"name":"name0356"},{"name":"name0357"},{"name":"name0358"},{"name":"name0359"},{"name":"name0360"},{"name":"name0361"},{"name":"name0362"},{"name":"name0363"},{"name":"name0364"},{"name":"name0365"},{"name":"name0366"},{"name":"name0367"},{"name":"name0368"},{"name":"name0369"},{"name":"name0370"},{"name":"name0371"},{"name":"name0372"},{"name":"name0373"},{"name":"name0374"},{"name":"name0375"},{"name":"name0376"},{"name":"name0377"},{"name":"name0378"},{"name":"name0379"},{"name":"name0380"},{"name":"name0381"},{"name":"name0382"},{"name":"name0383"},{"name":"name0384"},{"name":"name0385"},{"name":"name0386"},{"name":"name0387"},{"name":"name0388"},{"name":"name0389"},{"name":"name0390"},{"name":"name0391"},{"name":"name0392"},{"name":"name0393"},{"name":"name0394"},{"name":"name0395"},{"name":"name0396"},{"name":"name0397"},{"name":"name0398"},{"name":"name0399"},{"name":"name0400"},{"name":"name0401"},{"name":"name0402"},{"name":"name0403"},{"name":"name0404"},{"name":"name0405"},{"name":"name0406"},{"name":"name0407"},{"name":"name0408"},{"name":"name0409"},{"name":"name0410"},{"name":"name0411"},{"name":"name0412"},{"name":"name0413"},{"name":"name0414"},{"name":"name0415"},{"name":"name0416"},{"name":"name0417"},{"name":"name0418"},{"name":"name0419"},{"name":"name0420"},{"name":"name0421"},{"name":"name0422"},{"name":"name0423"},{"name":"name0424"},{"name":"name0425"},{"name":"name0426"},{"name":"name0427"},{"name":"name0428"},{"name":"name0429"},{"name":"name0430"},{"name":"name0431"},{"name":"name0432"},{"name":"name0433"},{"name":"name0434"},{"name":"name0435"},{"name":"name0436"},{"name":"name0437"},{"name":"name0438"},{"name":"name0439"},{"name":"name0440"},{"name":"name0441"},{"name":"name0442"},{"name":"name0443"},{"name":"name0444"},{"name":"name0445"},{"name":"name0446"},{"name":"name0447"},{"name":"name0448"},{"name":"name0449"},{"name":"name0450"},{"name":"name0451"},{"name":"name0452"},{"name":"name0453"},{"name":"name0454"},{"name":"name0455"},{"name":"name0456"},{"name":"name0457"},{"name":"name0458"},{"name":"name0459"},{"name":"name0460"},{"name":"name0461"},{"name":"name0462"},{"name":"name0463"},{"name":"name0464"},{"name":"name0465"},{"name":"name0466"},{"name":"name0467"},{"name":"name0468"},{"name":"name0469"},{"name":"name0470"},{"name":"name0471"},{"name":"name0472"},{"name":"name0473"},{"name":"name0474"},{"name":"name0475"},{"name":"name0476"},{"name":"name0477"},{"name":"name0478"},{"name":"name0479"},{"name":"name0480"},{"name":"name0481"},{"name":"name0482"},{"name":"name0483"},{"name":"name0484"},{"name":"name0485"},{"name":"name0486"},{"name":"name0487"},{"name":"name0488"},{"name":"name0489"},{"name":"name0490"},{"name":"name0491"},{"name":"name0492"},{"name":"name0493"},{"name":"name0494"},{"name":"name0495"},{"name":"name0496"},{"name":"name0497"},{"name":"name0498"},{"name":"name0499"},{"name":"name0500"},{"name":"name0501"},{"name":"name0502"},{"name":"name0503"},{"name":"name0504"},{"name":"name0505"},{"name":"name0506"},{"name":"name0507"},{"name":"name0508"},{"name":"name0509"},{"name":"name0510"},{"name":"name0511"},{"name":"name0512"},{"name":"name0513"},{"name":"name0514"},{"name":"name0515"},{"name":"name0516"},{"name":"name0517"},{"name":"name0518"},{"name":"name0519"},{"name":"name0520"},{"name":"name0521"},{"name":"name0522"},{"name":"name0523"},{"name":"name0524"},{"name":"name0525"},{"name":"name0526"},{"name":"name0527"},{"name":"name0528"},{"name":"name0529"},{"name":"name0530"},{"name":"name0531"},{"name":"name0532"},{"name":"name0533"},{"name":"name0534"},{"name":"name0535"},{"name":"name0536"},{"name":"name0537"},{"name":"name0538"},{"name":"name0539"},{"name":"name0540"},{"name":"name0541"},{"name":"name0542"},{"name":"name0543"},{"name":"name0544"},{"name":"name0545"},{"name":"name0546"},{"name":"name0547"},{"name":"name0548"},{"name":"name0549"},{"name":"name0550"},{"name":"name0551"},{"name":"name0552"},{"name":"name0553"},{"name":"name0554"},{"name":"name0555"},{"name":"name0556"},{"name":"name0557"},{"name":"name0558"},{"name":"name0559"},{"name":"name0560"},{"name":"name0561"},{"name":"name0562"},{"name":"name0563"},{"name":"name0564"},{"name":"name0565"},{"name":"name0566"},{"name":"name0567"},{"name":"name0568"},{"name":"name0569"},{"name":"name0570"},{"name":"name0571"},{"name":"name0572"},{"name":"name0573"},{"name":"name0574"},{"name":"name0575"},{"name":"name0576"},{"name":"name0577"},{"name":"name0578"},{"name":"name0579"},{"name":"name0580"},{"name":"name0581"},{"name":"name0582"},{"name":"name0583"},{"name":"name0584"},{"name":"name0585"},{"name":"name0586"},{"name":"name0587"},{"name":"name0588"},{"name":"name0589"},{"name":"name0590"},{"name":"name0591"},{"name":"name0592"},{"name":"name0593"},{"name":"name0594"},{"name":"name0595"},{"name":"name0596"},{"name":"name0597"},{"name":"name0598"},{"name":"name0599"},{"name":"name0600"},{"name":"name0601"},{"name":"name0602"},{"name":"name0603"},{"name":"name0604"},{"name":"name0605"},{"name":"name0606"},{"name":"name0607"},{"name":"name0608"},{"name":"name0609"},{"name":"name0610"},{"name":"name0611"},{"name":"name0612"},{"name":"name0613"},{"name":"name0614"},{"name":"name0615"},{"name":"name0616"},{"name":"name0617"},{"name":"name0618"},{"name":"name0619"},{"name":"name0620"},{"name":"name0621"},{"name":"name0622"},{"name":"name0623"},{"name":"name0624"},{"name":"name0625"},{"name":"name0626"},{"name":"name0627"},{"name":"name0628"},{"name":"name0629"},{"name":"name0630"},{"name":"name0631"},{"name":"name0632"},{"name":"name0633"},{"name":"name0634"},{"name":"name0635"},{"name":"name0636"},{"name":"name0637"},{"name":"name0638"},{"name":"name0639"},{"name":"name0640"},{"name":"name0641"},{"name":"name0642"},{"name":"name0643"},{"name":"name0644"},{"name":"name0645"},{"name":"name0646"},{"name":"name0647"},{"name":"name0648"},{"name":"name0649"},{"name":"name0650"},{"name":"name0651"},{"name":"name0652"},{"name":"name0653"},{"name":"name0654"},{"name":"name0655"},{"name":"name0656"},{"name":"name0657"},{"name":"name0658"},{"name":"name0659"},{"name":"name0660"},{"name":"name0661"},{"name":"name0662"},{"name":"name0663"},{"name":"name0664"},{"name":"name0665"},{"name":"name0666"},{"name":"name0667"},{"name":"name0668"},{"name":"name0669"},{"name":"name0670"},{"name":"name0671"},{"name":"name0672"},{"name":"name0673"},{"name":"name0674"},{"name":"name0675"},{"name":"name0676"},{"name":"name0677"},{"name":"name0678"},{"name":"name0679"},{"name":"name0680"},{"name":"name0681"},{"name":"name0682"},{"name":"name0683"},{"name":"name0684"},{"name":"name0685"},{"name":"name0686"},{"name":"name0687"},{"name":"name0688"},{"name":"name0689"},{"name":"name0690"},{"name":"name0691"},{"name":"name0692"},{"name":"name0693"},{"name":"name0694"},{"name":"name0695"},{"name":"name0696"},{"name":"name0697"},{"name":"name0698"},{"name":"name0699"},{"name":"name0700"},{"name":"name0701"},{"name":"name0702"},{"name":"name0703"},{"name":"name0704"},{"name":"name0705"},{"name":"name0706"},{"name":"name0707"},{"name":"name0708"},{"name":"name0709"},{"name":"name0710"},{"name":"name0711"},{"name":"name0712"},{"name":"name0713"},{"name":"name0714"},{"name":"name0715"},{"name":"name0716"},{"name":"name0717"},{"name":"name0718"},{"name":"name0719"},{"name":"name0720"},{"name":"name0721"},{"name":"name0722"},{"name":"name0723"},{"name":"name0724"},{"name":"name0725"},{"name":"name0726"},{"name":"name0727"},{"name":"name0728"},{"name":"name0729"},{"name":"name0730"},{"name":"name0731"},{"name":"name0732"},{"name":"name0733"},{"name":"name0734"},{"name":"name0735"},{"name":"name0736"},{"name":"name0737"},{"name":"name0738"},{"name":"name0739"},{"name":"name0740"},{"name":"name0741"},{"name":"name0742"},{"name":"name0743"},{"name":"name0744"},{"name":"name0745"},{"name":"name0746"},{"name":"name0747"},{"name":"name0748"},{"name":"name0749"},{"name":"name0750"},{"name":"name0751"},{"name":"name0752"},{"name":"name0753"},{"name":"name0754"},{"name":"name0755"},{"name":"name0756"},{"name":"name0757"},{"name":"name0758"},{"name":"name0759"},{"name":"name0760"},{"name":"name0761"},{"name":"name0762"},{"name":"name0763"},{"name":"name0764"},{"name":"name0765"},{"name":"name0766"},{"name":"name0767"},{"name":"name0768"},{"name":"name0769"},{"name":"name0770"},{"name":"name0771"},{"name":"name0772"},{"name":"name0773"},{"name":"name0774"},{"name":"name0775"},{"name":"name0776"},{"name":"name0777"},{"name":"name0778"},{"name":"name0779"},{"name":"name0780"},{"name":"name0781"},{"name":"name0782"},{"name":"name0783"},{"name":"name0784"},{"name":"name0785"},{"name":"name0786"},{"name":"name0787"},{"name":"name0788"},{"name":"name0789"},{"name":"name0790"},{"name":"name0791"},{"name":"name0792"},{"name":"name0793"},{"name":"name0794"},{"name":"name0795"},{"name":"name0796"},{"name":"name0797"},{"name":"name0798"},{"name":"name0799"},{"name":"name0800"},{"name":"name0801"},{"name":"name0802"},{"name":"name0803"},{"name":"name0804"},{"name":"name0805"},{"name":"name0806"},{"name":"name0807"},{"name":"name0808"},{"name":"name0809"},{"name":"name0810"},{"name":"name0811"},{"name":"name0812"},{"name":"name0813"},{"name":"name0814"},{"name":"name0815"},{"name":"name0816"},{"name":"name0817"},{"name":"name0818"},{"name":"name0819"},{"name":"name0820"},{"name":"name0821"},{"name":"name0822"},{"name":"name0823"},{"name":"name0824"},{"name":"name0825"},{"name":"name0826"},{"name":"name0827"},{"name":"name0828"},{"name":"name0829"},{"name":"name0830"},{"name":"name0831"},{"name":"name0832"},{"name":"name0833"},{"name":"name0834"},{"name":"name0835"},{"name":"name0836"},{"name":"name0837"},{"name":"name0838"},{"name":"name0839"},{"name":"name0840"},{"name":"name0841"},{"name":"name0842"},{"name":"name0843"},{"name":"name0844"},{"name":"name0845"},{"name":"name0846"},{"name":"name0847"},{"name":"name0848"},{"name":"name0849"},{"name":"name0850"},{"name":"name0851"},{"name":"name0852"},{"name":"name0853"},{"name":"name0854"},{"name":"name0855"},{"name":"name0856"},{"name":"name0857"},{"name":"name0858"},{"name":"name0859"},{"name":"name0860"},{"name":"name0861"},{"name":"name0862"},{"name":"name0863"},{"name":"name0864"},{"name":"name0865"},{"name":"name0866"},{"name":"name0867"},{"name":"name0868"},{"name":"name0869"},{"name":"name0870"},{"name":"name0871"},{"name":"name0872"},{"name":"name0873"},{"name":"name0874"},{"name":"name0875"},{"name":"name0876"},{"name":"name0877"},{"name":"name0878"},{"name":"name0879"},{"name":"name0880"},{"name":"name0881"},{"name":"name0882"},{"name":"name0883"},{"name":"name0884"},{"name":"name0885"},{"name":"name0886"},{"name":"name0887"},{"name":"name0888"},{"name":"name0889"},{"name":"name0890"},{"name":"name0891"},{"name":"name0892"},{"name":"name0893"},{"name":"name0894"},{"name":"name0895"},{"name":"name0896"},{"name":"name0897"},{"name":"name0898"},{"name":"name0899"},{"name":"name0900"},{"name":"name0901"},{"name":"name0902"},{"name":"name0903"},{"name":"name0904"},{"name":"name0905"},{"name":"name0906"},{"name":"name0907"},{"name":"name0908"},{"name":"name0909"},{"name":"name0910"},{"name":"name0911"},{"name":"name0912"},{"name":"name0913"},{"name":"name0914"},{"name":"name0915"},{"name":"name0916"},{"name":"name0917"},{"name":"name0918"},{"name":"name0919"},{"name":"name0920"},{"name":"name0921"},{"name":"name0922"},{"name":"name0923"},{"name":"name0924"},{"name":"name0925"},{"name":"name0926"},{"name":"name0927"},{"name":"name0928"},{"name":"name0929"},{"name":"name0930"},{"name":"name0931"},{"name":"name0932"},{"name":"name0933"},{"name":"name0934"},{"name":"name0935"},{"name":"name0936"},{"name":"name0937"},{"name":"name0938"},{"name":"name0939"},{"name":"name0940"},{"name":"name0941"},{"name":"name0942"},{"name":"name0943"},{"name":"name0944"},{"name":"name0945"},{"name":"name0946"},{"name":"name0947"},{"name":"name0948"},{"name":"name0949"},{"name":"name0950"},{"name":"name0951"},{"name":"name0952"},{"name":"name0953"},{"name":"name0954"},{"name":"name0955"},{"name":"name0956"},{"name":"name0957"},{"name":"name0958"},{"name":"name0959"},{"name":"name0960"},{"name":"name0961"},{"name":"name0962"},{"name":"name0963"},{"name":"name0964"},{"name":"name0965"},{"name":"name0966"},{"name":"name0967"},{"name":"name0968"},{"name":"name0969"},{"name":"name0970"},{"name":"name0971"},{"name":"name0972"},{"name":"name0973"},{"name":"name0974"},{"name":"name0975"},{"name":"name0976"},{"name":"name0977"},{"name":"name0978"},{"name":"name0979"},{"name":"name0980"},{"name":"name0981"},{"name":"name0982"},{"name":"name0983"},{"name":"name0984"},{"name":"name0985"},{"name":"name0986"},{"name":"name0987"},{"name":"name0988"},{"name":"name0989"},{"name":"name0990"},{"name":"name0991"},{"name":"name0992"},{"name":"name0993"},{"name":"name0994"},{"name":"name0995"},{"name":"name0996"},{"name":"name0997"},{"name":"name0998"},{"name":"name0999"}];
            for (let i=100;i<=dataList.length;i+=100) {
            let list = dataList.slice(i-100, i);
            let obj = {};
            for (let j =0;j<list.length;j++) {
                obj = Object.assign({},obj,{['list[' + (i - 100 + j) + '].name']: dataList[i - 100 + j].name});
            }
            if (i < 200) {
                this.setData(obj, () => {
                    this.firstRenderTime = new Date().getTime() - this.navTime;
                    console.log('firstRender: '+ this.firstRenderTime);
                    this.setData({
                        firstRenderTime: this.firstRenderTime
                    })
                });
            } else if (i < 900) {
                this.setData(obj);
            } else {
                this.setData(obj, () => {
                    this.lastRenderTime = new Date().getTime() - this.navTime;
                    console.log('firstRender: '+ this.lastRenderTime);
                    this.setData({
                        lastRenderTime: this.lastRenderTime
                    })
                });
            }
        }
    },
    onShow() {
        this.onShowTime = new Date().getTime() - this.navTime;
        console.log('show: '+ this.onShowTime);
    },
    onReady() {
        this.onReadyTime = new Date().getTime() - this.navTime;
        console.log('ready: '+ this.onReadyTime);
        this.setData({
            onLoadTime: this.onLoadTime,
            onShowTime: this.onShowTime,
            onReadyTime: this.onReadyTime,
        })
    }
})
