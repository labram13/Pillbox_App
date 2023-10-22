const drugs = ['atorvastatin','levothyroxine','metformin','lisinopril','amlodipine'
            ,'metoprolol','omeprazole','losartan','gabapentin','hydrochlorothiazide'
            ,'sertraline','simvastatin','montelukast','escitalopram','rosuvastatin'
            ,'bupropion','furosemide','pantoprazole','trazodone','fluticasone'
            ,'fluticasone','fluoxetine','carvedilol','duloxetine','meloxicam'
            ,'clopidogrel','prednisone','citalopram','insulin,glargine','pravastatin'
            ,'tramadol','aspirin','alprazolam','ibuprofen','cyclobenzaprine'
            ,'amoxicillin','methylphenidate','allopurinol','venlafaxine','clonazepam'
            ,'zolpidem','glipizide','spironolactone','cetirizine','atenolol'
            ,'oxycodone','buspirone','topiramate','lamotrigine','quetiapine'
            ,'lorazepam','famotidine','azithromycin','hydroxyzine','insulin,lispro'
            ,'diclofenac','diclofenac','loratadine','sitagliptin','clonidine'
            ,'diltiazem','pregabalin','doxycycline','insulin,aspart','amitriptyline'
            ,'paroxetine','lisdexamfetamine','glimepiride','propranolol'
            ,'aripiprazole','naproxen','levetiracetam','alendronate','dulaglutide'
            ,'oxybutynin','celecoxib','lovastatin','ezetimibe','cephalexin'
            ,'empagliflozin','hydralazine','mirtazapine','triamcinolone'
            ,'triamcinolone','triamcinolone','sumatriptan','donepezil','methotrexate'
            ,'acetaminophen','valacyclovir','esomeprazole','valsartan'
            ,'insulin,detemir','clindamycin','clindamycin','hydroxychloroquine'
            ,'diazepam','semaglutide','dexmethylphenidate','ciprofloxacin'
            ,'chlorthalidone','rizatriptan','nifedipine','insulin,degludec'
            ,'risperidone','olmesartan','morphine','benazepril','timolol'
            ,'oxcarbazepine','liraglutide','irbesartan','hydrocortisone'
            ,'hydrocortisone','verapamil','memantine','prednisolone','nortriptyline'
            ,'progesterone','mirabegron','methylprednisolone','acyclovir','acyclovir'
            ,'docusate','olanzapine','nitroglycerin','nitrofurantoin','pioglitazone'
            ,'clobetasol','azelastine','desvenlafaxine','oseltamivir','levocetirizine'
            ,'phentermine','sucralfate','sildenafil','mesalamine','carbamazepine'
            ,'buprenorphine','gemfibrozil','prazosin','lansoprazole','diphenhydramine'
            ,'diphenhydramine','ramipril','lithium','glyburide','adalimumab'
            ,'budesonide','budesonide','promethazine','doxazosin','labetalol'
            ,'terazosin','cyclosporine','torsemide','dapagliflozin','liothyronine'
            ,'beclomethasone','beclomethasone','insulin,isophane','metronidazole'
            ,'temazepam','erythromycin','erythromycin','polyethylene,glycol,3350'
            ,'cefdinir','tretinoin','mometasone','mometasone','eszopiclone'
            ,'betamethasone','betamethasone','minocycline','minocycline','nebivolol'
            ,'levofloxacin','ofloxacin','vortioxetine','umeclidinium','telmisartan'
            ,'ketorolac','hydromorphone','doxepin','doxepin','quinapril'
            ,'fexofenadine','ranolazine','lurasidone','phenytoin','tadalafil'
            ,'dexlansoprazole','isotretinoin','solifenacin','bisoprolol','olopatadine'
            ,'primidone','tolterodine','dexamethasone','zonisamide','calcitriol'
            ,'fluocinonide','ziprasidone','sulfasalazine','atomoxetine','raloxifene'
            ,'linagliptin','canagliflozin','alogliptin','isosorbide,dinitrate'
            ,'guanfacine'];

function renderDrugList() {
  const drugSearch = document.getElementById("drugSearch");
  for (let i = 0; i < drugs.length; i++) {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = drugs[i];
    item.appendChild(link);
    drugSearch.appendChild(item);
  }
}

renderDrugList();
